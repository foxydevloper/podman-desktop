<script lang="ts">
import { authenticationProviders } from '../../stores/authenticationProviders';
import { faCircle, faRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import SettingsPage from './SettingsPage.svelte';
import Fa from 'svelte-fa/src/fa.svelte';
import KeyIcon from '../images/KeyIcon.svelte';
import EmptyScreen from '../ui/EmptyScreen.svelte';
import DropdownMenu from '../ui/DropdownMenu.svelte';
import DropdownMenuItem from '../ui/DropDownMenuItem.svelte';
</script>

<SettingsPage title="Authentication">
  <div class="container h-full">
    <!-- Authentication Providers table start -->
    <EmptyScreen
      icon="{KeyIcon}"
      title="No authentication providers"
      message="Install an authentication provider extension to add an authentication provider here."
      hidden="{$authenticationProviders.length > 0}" />
    {#each $authenticationProviders as provider}
      <!-- Registered Authentication Provider row start -->
      <div class="flex flex-col w-full">
        <div class="flex rounded-md border-0" style="background-color: rgb(39 39 42 / var(--tw-bg-opacity))">
          <div class="ml-4 flex items-center">
            <div class="flex">
              {#if provider?.images?.icon}
                {#if typeof provider.images.icon === 'string'}
                  <img
                    src="{provider.images.icon}"
                    alt="{provider.displayName}"
                    aria-label="Icon for {provider.displayName} provider"
                    class="max-w-[40px] h-full" />
                  <!-- TODO check theme used for image, now use dark by default -->
                {:else}
                  <img
                    src="{provider.images.icon.dark}"
                    alt="Dark color theme icon for {provider.displayName} provider"
                    class="max-w-[40px]" />
                {/if}
              {:else}
                <svelte:component
                  this="{KeyIcon}"
                  size="40"
                  alt="{provider.displayName}"
                  aria-label="Default icon for {provider.displayName} provider" />
              {/if}
            </div>
          </div>
          <!-- Authentication Provider name and status item start -->
          <div class="px-5 py-2 text-sm w-1/3 m-auto">
            <div class="flex flex-col">
              <div class="flex items-center text-lg w-full h-full">
                {provider.displayName}
              </div>
              <div class="flex flex-row items-center w-full h-full">
                <dif>
                  <Fa
                    class="h-3 w-3 text-md mr-2 text-{provider.accounts.length > 0 ? 'green' : 'gray'}-500"
                    icon="{faCircle}" />
                </dif>
                <div class="uppercase text-xs text-{provider.accounts.length > 0 ? 'green' : 'gray'}-500">
                  <span>
                    {provider.accounts.length > 0 ? 'Logged in' : 'Logged out'}
                  </span>
                </div>
                {#if provider.accounts.length > 0}
                  <button
                    aria-label="Sign out of {provider.accounts[0].label}"
                    class="pl-2 hover:cursor-pointer hover:text-white text-white"
                    on:click="{() =>
                      window.requestAuthenticationProviderSignOut(provider.id, provider.accounts[0].id)}">
                    <Fa class="h-3 w-3 text-md mr-2" icon="{faRightFromBracket}" />
                  </button>
                {/if}
              </div>
            </div>
          </div>
          <!-- Authentication Provider name and status item end -->

          <!-- Authentication Provider Session label start -->
          <div class="pt-3 pb-3 text-sm w-2/3 m-auto">
            <div class="flex flex-row">
              <div class="flex items-center w-full">
                <span>
                  {provider.accounts.length > 0 ? provider.accounts[0].label : ''}
                </span>
              </div>
            </div>
          </div>
          <!-- Authentication Provider Session label start -->
          <div class="ml-4 flex items-center">
            {#if (provider.sessionRequests || []).length > 0}
              {@const sessionRequests = provider.sessionRequests || []}
              <DropdownMenu>
                {#each sessionRequests as request}
                  <DropdownMenuItem
                    title="Sign in to use {request.extensionLabel}"
                    onClick="{() => window.requestAuthenticationProviderSignIn(request.id)}"
                    icon="{faArrowRightToBracket}" />
                {/each}
              </DropdownMenu>
            {/if}
          </div>
        </div>
      </div>
      <!-- Registered Authentication Provider row end -->
    {/each}
  </div>
  <!-- Authentication Providers table end -->
</SettingsPage>
