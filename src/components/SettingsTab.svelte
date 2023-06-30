<script lang="ts">
  import {Button, Input} from 'flowbite-svelte'

  import type {PageData} from '../routes/intern/$types'

  export let data: PageData
</script>

<div class="lg:px-10 md:px-8 px-4 mt-5 lg:mb-8 md:mb-6 mb-4">
  <div class="md:mb-0 lg:mb-0 h-full dark:bg-gray-900 space-y-2 rounded-md">
    <div class="flex flex-col lg:py-8 md:py-8 py-4 lg:px-8 md:px-8 px-4 w-full">
      <div class="flex items-center lg:mb-14 md:mb-12 mb-8">
        <div class="mr-6">
          <img class="rounded-full w-16 h-16 lg:w-36 lg:h-36 md:w-28 md:h-28" src="" alt="" />
        </div>
        <div class="flex items-center w-full">
          <h1 class="text-white text-2xl lg:text-4xl md:text-4xl font-bold mr-4">
            {data.me.user_name}
          </h1>
          <span
            class="bg-amber-500 text-yellow-800 text-sm font-medium lg:py-1.5 md:py-1.5 lg:px-3
            md:px-3 py-1 px-2 mt-1 dark:bg-yellow-500 dark:text-yellow-100">Intern</span
          >
        </div>
      </div>
      <div class="flex flex-col lg:flex-row md:flex-row">
        <!-- profile info block -->
        <div class="flex flex-col w-full lg:w-1/2 lg:mr-8 md:w-1/2 md:mr-8 mb-10">
          <h2 class="text-white lg:text-2xl md:text-2xl text-xl font-semibold mb-3">
            Your Profile
          </h2>
          <hr class="border-gray-700 mb-4" />
          <div class="lg:mb-6 md:mb-6 mb-4">
            <p class="text-white mb-2">Full Name</p>
            <Input class="py-2" type="text" name="full_name" required value={data.me.full_name} />
          </div>
          <div class="lg:mb-6 md:mb-6 mb-4">
            <p class="text-white mb-2">Email</p>
            <Input class="py-2" type="email" name="email" required value={data.me.email} />
          </div>
          <div>
            <Button type="submit" class="bg-yellow-500 dark:hover:bg-amber-500"
              >Update profile</Button
            >
          </div>
        </div>
        <!-- profile password block -->
        <div class="flex flex-col w-full lg:w-1/2 lg:ml-8 md:w-1/2 md:ml-8">
          <h2 class="text-white lg:text-2xl md:text-2xl text-xl font-semibold mb-3">
            Change Password
          </h2>
          <hr class="border-gray-700 mb-4" />
          <div class="lg:mb-6 md:mb-6 mb-4">
            <p class="text-white mb-2">Old Password</p>
            <Input class="py-2" type="password" name="old_pass" required />
          </div>
          <div class="lg:mb-6 md:mb-6 mb-4">
            <p class="text-white mb-2">New Password</p>
            <Input class="py-2" type="password" name="new_pass" required />
          </div>
          <div class="lg:mb-6 md:mb-6 mb-4">
            <p class="text-white mb-2">Confirm New Password</p>
            <Input class="py-2" type="password" name="conf_new_pass" required />
          </div>
          <div>
            <Button type="submit" class=" bg-yellow-500 dark:hover:bg-amber-500"
              >Update password</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
