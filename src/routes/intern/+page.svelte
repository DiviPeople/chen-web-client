<script lang="ts">
  import type {PageData} from './$types'

  export let data: PageData
</script>

<div class="h-screen w-full flex overflow-hidden">
  <main
    class="flex-1 flex flex-col dark:bg-slate-800 transition
		duration-500 ease-in-out overflow-y-auto"
  >
    <div
      class="px-10 mt-5 mb-16 lg:grid md:grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {#each data.users as user}
        {#if user.email == data.me.email}
          <div
            class="mb-4 md:mb-0 lg:mb-0 lg:h-full group relative dark:bg-slate-800 flex flex-col space-y-2 items-center rounded-md"
          >
            <div class="w-full py-5 h-full flex flex-col items-center bg-gray-900">
              <div class="[backface-visibility:hidden]">
                <h4 class="text-white text-2xl font-bold text-center mb-2">{user.user_name}</h4>
                <div class="flex w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4">
                  <img class="rounded-full w-full h-full" src="" alt="" />
                </div>
                <h4 class="text-white text-xl font-bold text-center">{user.full_name}</h4>
                <p class="text-white/50 text-center">Intern (You)</p>
              </div>
            </div>
          </div>
        {:else}
          <div
            class="mb-4 md:mb-0 lg:mb-0 lg:h-full group relative dark:bg-slate-800 flex flex-col space-y-2 items-center rounded-md"
          >
            <div
              class="w-full py-5 h-full flex flex-col items-center bg-gray-900"
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
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </main>
</div>
