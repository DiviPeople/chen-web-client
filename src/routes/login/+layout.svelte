<script>
  import '../../app.css'

  import {Navbar, NavBrand} from 'flowbite-svelte'
</script>

<header>
  <div class="">
    <Navbar class="dark:bg-neutral-900 dark:border-zinc-950">
      <NavBrand href="/login">
        <img src="chen.png" class="mr-3 h-6 sm:h-11" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold text-white">
          ChenAPI
        </span>
      </NavBrand>
    </Navbar>
  </div>
</header>

<slot />
