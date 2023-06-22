<script lang="ts">
  import {Button, Card, Input, Label} from 'flowbite-svelte'

  let isShown = false
  function toggle() {
    isShown = !isShown
  }
</script>

<Card class="mt-20 m-auto dark:bg-neutral-900 dark:border-zinc-800">
  <form method="POST" class="flex flex-col space-y-6 dark:bg-neutral-900">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h3>
    <Label class="space-y-2">
      <span>Email</span>
      <Input type="email" name="email" placeholder="example@email.com" required />
    </Label>
    <Label class="space-y-2">
      <span>Your password</span>
      <Input type="password" name="password" placeholder="•••••••••" required />
    </Label>
    <Button type="submit" class="w-full dark:bg-yellow-500 dark:hover:bg-amber-500"
      >Login to your account</Button
    >
    <Button class="w-full dark:bg-gray-600 dark:hover:bg-gray-500" on:click={toggle}
      >Forgot password?</Button
    >
  </form>
</Card>

{#if isShown}
  <div>
    <Card class="mt-2 m-auto dark:bg-neutral-900 dark:border-zinc-800">
      <form class="flex flex-col space-y-6 bg-neutral-900" action="/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Enter your email</h3>
        <Label class="space-y-2">
          <Input type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Button type="submit" class="w-full dark:bg-gray-600 dark:hover:bg-gray-500"
          >Send password</Button
        >
      </form>
    </Card>
  </div>
{/if}
