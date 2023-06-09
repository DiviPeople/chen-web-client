<script lang="ts">
  import {Drawer, Button, CloseButton, Label, Input, Checkbox} from 'flowbite-svelte'
  import {sineIn} from 'svelte/easing'
  import type {PageData} from './$types'

  export let data: PageData

  let hidden3 = true
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }
</script>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id="sidebar3">
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >Create user
    </h5>

    <CloseButton on:click={() => (hidden3 = true)} class="mb-4 dark:text-white" />
  </div>
  <form method="POST" action="?/users" class="mb-6">
    <div class="mb-6">
      <Label class="block mb-2">Login</Label>
      <Input type="text" name="login" required placeholder="d.ivanko" />
    </div>
    <div class="mb-6">
      <Label class="block mb-2">Email</Label>
      <Input type="email" name="email" required placeholder="example@gmail.com" />
    </div>
    <div class="mb-6">
      <Label class="space-y-2">
        <span>Role</span>
        <ul
          class="items-center w-full rounded-lg border border-zinc-800 sm:flex dark:bg-gray-600 dark:border-zinc-800 divide-x divide-zinc-800 dark:divide-zinc-800"
        >
          <li class="w-full"><Checkbox name="staff" class="p-3">staff</Checkbox></li>
        </ul>
      </Label>
    </div>
    <Button type="submit" class="w-full bg-yellow-500 dark:hover:bg-amber-500">Create user</Button>
  </form>
</Drawer>

<div class="h-screen w-full flex overflow-hidden">
  <nav class="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
    <div>
      <h2 class="mt-6 text-xl dark:text-gray-300 font-extrabold capitalize">{data.me.full_name}</h2>
      <span class="text-sm dark:text-gray-300">
        <span class="font-semibold text-green-600 dark:text-green-300">
          {#if data.me.is_staff}
            Staff
          {:else}
            Intern
          {/if}
        </span>
      </span>
    </div>

    <ul class="mt-2 text-gray-600">
      <li class="mt-6">
        <a href="#home" class="flex">
          <svg class="fill-current h-5 w-5 dark:text-gray-300" viewBox="0 0 24 24">
            <path
              d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"
            />
          </svg>
          <span
            class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">connections</span
          >
        </a>
      </li>

      <li class="mt-6">
        <a href="#home" class="flex">
          <svg class="fill-current h-5 w-5 dark:text-gray-300" viewBox="0 0 24 24">
            <path
              d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"
            />
          </svg>
          <span
            class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">reminder</span
          >
        </a>
      </li>

      <li
        class="mt-6 shadow dark:bg-gray-200 py-2 rounded-lg
				-ml-4"
      >
        <a href="/admin/users" class="flex pl-4">
          <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"
            />
          </svg>
          <span class="ml-2 capitalize font-medium">users</span>
        </a>
      </li>

      <li class="mt-6">
        <a href="/admin/settings" class="flex">
          <svg class="fill-current h-5 w-5 dark:text-gray-300" viewBox="0 0 24 24">
            <path
              d="M12 13H7v5h5v2H5V10h2v1h5v2M8
							4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
							9v2h-4v-2h4m2-2h-8v6h8v-6z"
            />
          </svg>
          <span
            class="ml-2 capitalize font-medium text-black
						dark:text-gray-300">settings</span
          >
        </a>
      </li>

      <li class="mt-6 flex items-center text-red-700 dark:text-red-400">
        <a href="#home" class="flex items-center">
          <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
              2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
              0 012-2h9z"
            />
          </svg>
          <span class="ml-2 capitalize font-medium">log out</span>
        </a>
      </li>
    </ul>
  </nav>
  <main
    class="flex-1 flex flex-col dark:bg-slate-800 transition
		duration-500 ease-in-out overflow-y-auto"
  >
    <div
      class="mb-10 px-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover"
      >
        <p
          class="bg-amber-500/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
          on:click={() => (hidden3 = false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </p>
        <p class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center">
          Create user
        </p>
      </div>

      {#each data.users as user}
        <div
          class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover"
        >
          <h4 class="text-white text-2xl font-bold text-center">{user.full_name}</h4>
          <p class="text-white/50">
            {#if user.is_staff}
              Staff
            {:else}
              Intern
            {/if}
          </p>
        </div>
      {/each}
    </div>
  </main>
</div>
