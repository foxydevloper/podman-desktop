/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { beforeEach, expect, test, vi } from 'vitest';
import { installBinaryToSystem } from './cli-run';
import * as extensionApi from '@podman-desktop/api';
import * as sudo from 'sudo-prompt';
import * as fs from 'node:fs';

vi.mock('@podman-desktop/api', async () => {
  return {
    window: {
      showInformationMessage: vi.fn().mockReturnValue(Promise.resolve('Yes')),
      showErrorMessage: vi.fn(),
      withProgress: vi.fn(),
      showNotification: vi.fn(),
    },
    ProgressLocation: {
      APP_ICON: 1,
    },
    process: {
      exec: vi.fn(),
    },
  };
});

// Mock sudo-prompt exec to resolve everytime.
vi.mock('sudo-prompt', async () => {
  return {
    exec: vi.fn().mockImplementation(callback => {
      callback(undefined);
    }),
  };
});

// mock exists sync
vi.mock('node:fs', async () => {
  return {
    existsSync: vi.fn(),
  };
});

beforeEach(() => {
  vi.resetAllMocks();
  vi.restoreAllMocks();
});

test('error: expect installBinaryToSystem to fail with a non existing binary', async () => {
  // Mock the platform to be linux
  Object.defineProperty(process, 'platform', {
    value: 'linux',
  });

  vi.spyOn(extensionApi.process, 'exec').mockImplementation(
    () =>
      new Promise<extensionApi.RunResult>((resolve, reject) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ exitCode: 1602 } as extensionApi.RunError);
      }),
  );

  // Expect await installBinaryToSystem to throw an error
  await expect(installBinaryToSystem('test', 'tmpBinary')).rejects.toThrowError();
});

test('success: installBinaryToSystem on mac with /usr/local/bin already created', async () => {
  // Mock the platform to be darwin
  Object.defineProperty(process, 'platform', {
    value: 'darwin',
  });

  // Mock existsSync to be true since within the function it's doing: !fs.existsSync(localBinDir)
  vi.spyOn(fs, 'existsSync').mockImplementation(() => {
    return true;
  });

  // When exec is called, expect the following
  vi.spyOn(sudo, 'exec').mockImplementation((command, options, callback) => {
    expect(options.name).toBe('Binary Installation');
    expect(command).toBe('cp test /usr/local/bin/tmpBinary');
    callback(undefined);
  });

  // Run installBinaryToSystem which will trigger the spyOn mock
  await installBinaryToSystem('test', 'tmpBinary');
});

test('success: installBinaryToSystem on mac with /usr/local/bin NOT created yet (expect mkdir -p command)', async () => {
  // Mock the platform to be darwin
  Object.defineProperty(process, 'platform', {
    value: 'darwin',
  });

  // Mock existsSync to be false since within the function it's doing: !fs.existsSync(localBinDir)
  vi.spyOn(fs, 'existsSync').mockImplementation(() => {
    return false;
  });

  // When exec is called, expect the following
  vi.spyOn(sudo, 'exec').mockImplementation((command, options, callback) => {
    expect(options.name).toBe('Binary Installation');
    expect(command).toBe('mkdir -p /usr/local/bin && cp test /usr/local/bin/tmpBinary');
    callback(undefined);
  });

  // Run installBinaryToSystem which will trigger the spyOn mock
  await installBinaryToSystem('test', 'tmpBinary');
});

test('success: installBinaryToSystem on linux with /usr/local/bin NOT created yet (expect mkdir -p command)', async () => {
  // Mock the platform to be darwin
  Object.defineProperty(process, 'platform', {
    value: 'linux',
  });

  // Mock existsSync to be false since within the function it's doing: !fs.existsSync(localBinDir)
  vi.spyOn(fs, 'existsSync').mockImplementation(() => {
    return false;
  });

  // When exec is called, expect the following
  vi.spyOn(sudo, 'exec').mockImplementation((command, options, callback) => {
    expect(options.name).toBe('Binary Installation');
    expect(command).toBe('mkdir -p /usr/local/bin && cp test /usr/local/bin/tmpBinary');
    callback(undefined);
  });

  // Run installBinaryToSystem which will trigger the spyOn mock
  await installBinaryToSystem('test', 'tmpBinary');
});
