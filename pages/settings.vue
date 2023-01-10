<template>
  <div>
    <main class="mx-auto max-w-7xl pb-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside class="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <nav class="space-y-1">
            <button @click="settingsSelection = 'profile'" type="button" :class="settingsSelection === 'profile' ? 'dark:bg-zinc-900 bg-zinc-50 dark:text-violet-500 text-violet-600':''" class="w-full dark:text-zinc-100 text-zinc-900 dark:hover:bg-zinc-900 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium transition-hover-300" aria-current="page">
              <svg class="text-zinc-400 group-hover:text-zinc-500 group-hover:transition-hover-300 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="truncate">Profile</span>
            </button>

            <button @click="settingsSelection = 'account'" type="button" :class="settingsSelection === 'account' ? 'dark:bg-zinc-900 bg-zinc-50 dark:text-violet-500 text-violet-600':''" class="w-full dark:text-zinc-100 text-zinc-900 dark:hover:bg-zinc-900 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium transition-hover-300">
              <!-- Heroicon name: outline/cog -->
              <svg class="text-zinc-400 group-hover:text-zinc-500 group-hover:transition-hover-300 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>
              <span class="truncate">Account</span>
            </button>

            <button @click="settingsSelection = 'password'" type="button" :class="settingsSelection === 'password' ? 'dark:bg-zinc-900 bg-zinc-50 dark:text-violet-500 text-violet-600':''" class="w-full dark:text-zinc-100 text-zinc-900 dark:hover:bg-zinc-900 hover:bg-white group rounded-md px-3 py-2 flex items-center text-sm font-medium transition-hover-300">
              <!-- Heroicon name: outline/key -->
              <svg class="text-zinc-400 group-hover:text-zinc-500 group-hover:transition-hover-300 flex-shrink-0 -ml-1 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              <span class="truncate">Password</span>
            </button>
          </nav>
        </aside>

        <SettingsProfile v-if="settingsSelection === 'profile'" />
        <SettingsAccount v-if="settingsSelection === 'account'" />
        <SettingsPassword v-if="settingsSelection === 'password'" />

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const settingsSelection = ref<"profile" | "account" | "password">("profile")
</script>
