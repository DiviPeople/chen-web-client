<script lang="ts">
  import '../../app.css'
  import {Button, CloseButton, Drawer, Navbar, NavBrand} from 'flowbite-svelte'
  import {sineIn} from 'svelte/easing'
  import type {LayoutData} from './$types'

  export let data: LayoutData

  let showMenu = true

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }
</script>

<Drawer
  class="dark:bg-gray-900 flex"
  transitionType="fly"
  {transitionParams}
  bind:hidden={showMenu}
  id="side_menu"
>
  <nav id="sideMenu" class="flex flex-col bg-gray-200 dark:bg-gray-900 w-full h-full px-4 pb-6">
    <div>
      <h2 class="mt-2 text-xl dark:text-gray-300 font-extrabold capitalize">{data.me.full_name}</h2>
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
  <CloseButton on:click={() => (showMenu = true)} class="absolute right-5 mb-4 dark:text-white" />
</Drawer>

<header>
  <div class="flex justify-between">
    <Button class="lg:hidden" on:click={() => (showMenu = false)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Button>
    <Navbar class="dark:bg-neutral-900 dark:border-zinc-950">
      <NavBrand>
        <img src="chen.png" class="mr-3 h-6 sm:h-11" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white">
          ChenAPI
        </span>
      </NavBrand>
    </Navbar>
  </div>
</header>

<slot />
