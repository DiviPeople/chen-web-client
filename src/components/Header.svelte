<script lang="ts">
  import {Button, Navbar, NavBrand} from 'flowbite-svelte'

  export let showMenu: boolean
</script>

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
