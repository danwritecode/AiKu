<template>
  <div class="relative">
    <Html :class="isDark ? 'dark':''" >
      <Body class="dark:bg-zinc-800 bg-zinc-100"></Body>
    </Html>

    <nav class="border-b dark:border-zinc-600 border-zinc-200 dark:bg-zinc-800 bg-zinc-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/" class="text-black dark:text-zinc-100 text-zinc-900">AiKu</NuxtLink>
            </div>
            <div class="hidden sm:-my-px sm:ml-16 sm:flex sm:space-x-8">
              <NuxtLink to="/browse" :class="curPath === '/browse' ? 'border-violet-500 dark:text-zinc-100 text-zinc-900':'text-zinc-500'" class="border-transparent dark:text-zinc-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" aria-current="page">Browse</NuxtLink>
              <NuxtLink to="/create" :class="curPath === '/create' ? 'border-violet-500 dark:text-zinc-100 text-zinc-900':'text-zinc-500'" class="border-transparent dark:text-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Create</NuxtLink>
              <NuxtLink v-if="user" to="/my-stuff" :class="curPath === '/my-stuff' ? 'border-violet-500 dark:text-zinc-100 text-zinc-900':' text-zinc-500'" class="border-transparent dark:text-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">My stuff</NuxtLink>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button @click="isDark = !isDark" type="button" class="dark:bg-zinc-600 bg-zinc-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 transition-hover-300" role="switch" aria-checked="false">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" :class="isDark ? 'translate-x-5 bg-violet-500':'translate-x-0 dark:bg-zinc-400 bg-zinc-100'" class="pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-5">
              <div>
                <button v-if="user" @click="showProfileDropdown = !showProfileDropdown" type="button" class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 dark:ring-offset-zinc-800 focus:ring-offset-2 transition-hover-300" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <div class="flex items-center justify-center h-8 w-8 rounded-full border dark:border-zinc-600 dark:border-zinc-600 border-zinc-300 dark:bg-zinc-800 bg-zinc-50 dark:text-zinc-300 text-zinc-500">
                    Me 
                  </div>
                </button>
                <NuxtLink v-else to="/login" class="inline-flex items-center rounded-md border dark:border-gray-700 border-gray-300 dark:bg-zinc-800 bg-zinc-100 px-3 py-2 text-sm font-medium leading-4 dark:text-zinc-300 text-gray-700 shadow-sm hover:border-violet-600/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-hover-300">Login</NuxtLink>
              </div>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95" 
              >
                <div v-if="showProfileDropdown" class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md dark:bg-zinc-800 bg-zinc-100 py-1 shadow-lg ring-1 dark:ring-zinc-600 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <a href="#" class="block px-4 py-2 text-sm dark:text-zinc-300 text-zinc-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                  <a href="#" class="block px-4 py-2 text-sm dark:text-zinc-300 text-zinc-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                  <button @click="signOut(), showProfileDropdown = false" type="button" class="block px-4 py-2 text-sm dark:text-zinc-300 text-zinc-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</button>
                </div>
              </transition>
            </div>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="isDark = !isDark" type="button" class="dark:bg-zinc-600 bg-zinc-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 transition-hover-300" role="switch" aria-checked="false">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" :class="isDark ? 'translate-x-5 bg-violet-500':'translate-x-0 dark:bg-zinc-400 bg-zinc-100'" class="pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"></span>
            </button>

            <!-- Mobile menu button -->
            <button @click="showMobileNav = !showMobileNav" type="button" class="ml-4 inline-flex items-center justify-center rounded-md dark:bg-zinc-800 bg-zinc-100 p-2 dark:text-zinc-500 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg :class="!showMobileNav ? 'block':'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg :class="showMobileNav ? 'block':'hidden'" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-if="showMobileNav" class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 pt-2 pb-3">
          <NuxtLink to="/browse" :class="curPath === '/' ? mobileActiveLink:mobileInactiveLink" class="block pl-3 pr-4 py-2 text-base font-medium" aria-current="page">Browse</NuxtLink>
          <NuxtLink to="/create" :class="curPath === '/create' ? mobileActiveLink:mobileInactiveLink" class="block pl-3 pr-4 py-2 text-base font-medium" aria-current="page">Create</NuxtLink>
          <NuxtLink v-if="user" to="/" :class="curPath === '/' ? mobileActiveLink:mobileInactiveLink" class="block pl-3 pr-4 py-2 text-base font-medium" aria-current="page">My stuff</NuxtLink>
        </div>
        <div class="border-t border-zinc-200 pt-4 pb-3">
          <div class="flex items-center px-4">
            <div>
              <div class="text-base font-medium dark:text-zinc-300 text-zinc-800">Tom Cook</div>
              <div class="text-sm font-medium dark:text-zinc-400 text-zinc-500">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 space-y-1">
            <a href="#" class="block px-4 py-2 text-base font-medium dark:text-zinc-300 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-base font-medium dark:text-zinc-300 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800">Settings</a>
            <a href="#" class="block px-4 py-2 text-base font-medium dark:text-zinc-300 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

    <div v-if="haiku.showOverlay" class="px-4 pt-2 absolute z-10">
      <ShareHaiku />
    </div>

    <div v-show="!haiku.showOverlay">
      <slot />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useHaikuStore } from '~/stores/haiku'
const user = useSupabaseUser()
const client = useSupabaseAuthClient()

const signOut = async () => {
  const { error } = await client.auth.signOut()

  if(!error) {
    navigateTo("/") 
  }
}

const route = useRoute()
const curPath = computed(() => {
  return route.path 
})

const haiku = useHaikuStore()

const isDark = ref(true)

const showProfileDropdown = ref(false)
const showMobileNav = ref(false)

const mobileActiveLink = "dark:bg-violet-800/25 bg-violet-50 border-violet-500 dark:text-violet-500 text-violet-700 border-l-4"
const mobileInactiveLink = "border-transparent dark:text-zinc-300 text-zinc-600 hover:bg-violet-800/25 hover:border-violet-300 hover:text-violet-500 border-l-4"
</script>
