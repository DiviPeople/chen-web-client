<script lang="ts">
  import {Button, Checkbox, CloseButton, Drawer, Input, Label} from 'flowbite-svelte'
  import {sineIn} from 'svelte/easing'

  import type {PageData} from './$types'

  export let data: PageData

  let user_name: string
  let full_name: string
  let hidden3 = true
  let hidden_del = true
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
      class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase
      dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1
          1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >Create user
    </h5>

    <CloseButton on:click={() => (hidden3 = true)} class="mb-4 dark:text-white" />
  </div>
  <form method="POST" action="?/create_user" class="mb-6">
    <div class="mb-6">
      <Label class="block mb-2">Login</Label>
      <Input type="text" name="login" required placeholder="d.ivanko" />
    </div>
    <div class="mb-6">
      <Label class="block mb-2">Email</Label>
      <Input type="email" name="email" required placeholder="example@gmail.com" />
    </div>
    <div class="mb-6">
      <Label class="block mb-2">Full Name</Label>
      <Input type="text" name="full_name" required placeholder="Dmitry Ivanko" />
    </div>
    <div class="mb-6">
      <Label class="space-y-2">
        <span>Role</span>
        <ul
          class="items-center w-full rounded-lg border border-zinc-800 sm:flex dark:bg-gray-600
          dark:border-zinc-800 divide-x divide-zinc-800 dark:divide-zinc-800"
        >
          <li class="w-full"><Checkbox name="staff" class="p-3">staff</Checkbox></li>
        </ul>
      </Label>
    </div>
    <Button type="submit" class="w-full bg-yellow-500 dark:hover:bg-amber-500">Create user</Button>
  </form>
</Drawer>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden_del} id="user_deletion">
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase
      dark:text-gray-400"
    >
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1
          1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        /></svg
      >Delete user
    </h5>

    <CloseButton on:click={() => (hidden_del = true)} class="mb-4 dark:text-white" />
  </div>

  <form method="POST" action="?/delete_user" class="mb-6">
    <p class="text-white mb-4">Are you sure you want to delete this user?</p>
    <div class="mb-6">
      <Label class="block mb-2">Login</Label>
      <Input readonly name="delete_login" value={user_name} />
    </div>
    <div class="mb-6">
      <Label class="block mb-2">Full Name</Label>
      <Input readonly name="delete_name" value={full_name} />
    </div>
    <Button type="submit" class="w-full bg-yellow-500 dark:hover:bg-amber-500">Delete user</Button>
  </form>
</Drawer>

<div class="h-screen w-full flex overflow-hidden">
  <main
    class="flex-1 flex flex-col dark:bg-slate-800 transition
		duration-500 ease-in-out overflow-y-auto"
  >
    <div
      class="px-10 mt-5 mb-16 lg:grid md:grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
      lg:grid-cols-4"
    >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="group bg-gray-900/30 px-4 py-4 mb-4 flex lg:flex-col md:flex-col md:h-full md:pt-14
        lg:pt-16 space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40
        hover:smooth-hover"
        on:click={() => (hidden3 = false)}
      >
        <p
          class="bg-amber-500/70 text-white/50 group-hover:text-white group-hover:smooth-hover
          flex w-14 h-14 lg:w-20 lg:h-20 rounded-full items-center justify-center"
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
        <p
          class="ml-4 lg:ml-0 md:ml-0 pb-2 text-white/50 group-hover:text-white
          group-hover:smooth-hover"
        >
          Create user
        </p>
      </div>

      {#each data.users as user}
        {#if user.email == data.me.email}
          <div
            class="mb-4 md:mb-0 lg:mb-0 lg:h-full group relative dark:bg-slate-800 flex flex-col
            space-y-2 items-center rounded-md"
          >
            <div class="w-full py-5 h-full flex flex-col items-center bg-gray-900">
              <div class="[backface-visibility:hidden]">
                <h4 class="text-white text-2xl font-bold text-center mb-2">{user.user_name}</h4>
                <div class="flex w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4">
                  <img class="rounded-full w-full h-full" src="" alt="" />
                </div>
                <h4 class="text-white text-xl font-bold text-center">{user.full_name}</h4>
                <p class="text-white/50 text-center">Staff (You)</p>
              </div>
            </div>
          </div>
        {:else}
          <div
            class="mb-4 md:mb-0 lg:mb-0 lg:h-full group relative dark:bg-slate-800 flex flex-col
            space-y-2 items-center cursor-pointer rounded-md"
          >
            <div
              class="w-full py-5 h-full flex flex-col items-center transition-all duration-500
              [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] bg-gray-900"
            >
              <div class="[backface-visibility:hidden]">
                <h4 class="text-white text-2xl font-bold text-center mb-2">{user.user_name}</h4>
                <div class="flex w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4">
                  <img class="rounded-full w-full h-full" src="" alt="" />
                </div>
                <h4 class="text-white text-xl font-bold text-center">{user.full_name}</h4>
                <p class="text-white/50 text-center">
                  {#if user.is_staff}
                    Staff
                  {:else}
                    Intern
                  {/if}
                </p>
              </div>
              <div
                class="flex flex-col absolute bottom-0 pb-4 w-full px-4 [transform:rotateY(180deg)]
                [backface-visibility:hidden]"
              >
                <div class="flex w-20 h-20 lg:w-20 lg:h-20 mx-auto lg:mb-6 mb-10">
                  <img class="rounded-full w-full h-full" src="" alt="" />
                </div>
                <div class="flex lg:block">
                  <Button
                    class="w-1/2 h-1/2 lg:w-full lg:h-full dark:bg-yellow-500
                    dark:hover:bg-amber-500 mr-1 lg:mb-2 lg:mr-0">Edit</Button
                  >
                  <Button
                    on:click={() => {
                      hidden_del = false
                      user_name = user.user_name
                      full_name = user.full_name
                    }}
                    class="w-1/2 h-1/2 lg:w-full lg:h-full dark:bg-yellow-500
                    dark:hover:bg-amber-500 ml-1 lg:ml-0">Delete</Button
                  >
                </div>
              </div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </main>
</div>
