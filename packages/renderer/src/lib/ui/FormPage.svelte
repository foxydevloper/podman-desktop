<script lang="ts">
import { lastPage, currentPage } from '../../stores/breadcrumb';
import { router } from 'tinro';
import Link from './Link.svelte';

export let title: string;
export let showBreadcrumb = true;

export function close(): void {
  router.goto($lastPage.path);
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    close();
    e.preventDefault();
  }
}
</script>

<svelte:window on:keydown="{handleKeydown}" />

<div class="flex flex-col w-full h-full shadow-pageheader">
  <div class="flex flex-row w-full h-fit px-5 py-4">
    <div class="flex flex-col w-full h-fit">
      {#if showBreadcrumb}
        <div class="flex flew-row items-center">
          <Link aria-label="back" internalRef="{$lastPage.path}" title="Go back to {$lastPage.name}"
            >{$lastPage.name}</Link>
          <div class="text-xl mx-2 text-gray-700">></div>
          <div class="grow text-sm font-extralight text-gray-700" aria-label="name">{$currentPage.name}</div>
          <a href="{$lastPage.path}" title="Close" class="justify-self-end text-gray-900">
            <i class="fas fa-times" aria-hidden="true"></i>
          </a>
        </div>
      {/if}
      <div class="flex flex-row items-center pt-1">
        {#if $$slots.icon}
          <div class="pr-3 text-gray-700">
            <slot name="icon" />
          </div>
        {/if}
        <h1 aria-label="{title}" class="grow text-xl first-letter:uppercase">{title}</h1>
        {#if $$slots.actions}
          <div class="flex flex-nowrap justify-self-end pl-3 space-x-2">
            <slot name="actions" />
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="flex w-full h-full bg-zinc-700 overflow-auto">
    <slot name="content" />
  </div>
</div>
