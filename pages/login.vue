<template>
  <div class="flex h-[80vh] lg:h-[93.5vh]">
    <div class="flex flex-1 flex-col justify-center pb-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <!-- <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600" alt="Your Company"> -->
          <h2 class="mt-6 text-3xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900">Sign in and start creating</h2>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <p class="text-sm font-medium dark:text-zinc-300 text-zinc-700">Sign in with</p>

              <div class="mt-1 grid grid-cols-3 gap-3">
                <div>
                  <a href="#" class="inline-flex w-full justify-center rounded-md border border-zinc-300 bg-white py-2 px-4 text-sm font-medium text-zinc-500 shadow-sm hover:bg-zinc-50">
                    <span class="sr-only">Sign in with Facebook</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href="#" class="inline-flex w-full justify-center rounded-md border border-zinc-300 bg-white py-2 px-4 text-sm font-medium text-zinc-500 shadow-sm hover:bg-zinc-50">
                    <span class="sr-only">Sign in with Twitter</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>

                <div>
                  <a href="#" class="inline-flex w-full justify-center rounded-md border border-zinc-300 bg-white py-2 px-4 text-sm font-medium text-zinc-500 shadow-sm hover:bg-zinc-50">
                    <span class="sr-only">Sign in with GitHub</span>
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-zinc-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="dark:bg-zinc-800 bg-zinc-100 px-2 dark:text-zinc-300 text-zinc-500">Or continue with</span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form
              @submit.prevent="signIn()"
              @keyup.enter.prevent="signIn()"
              class="space-y-6"
            >
              <div>
                <label for="email" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Email address</label>
                <div class="mt-1">
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Password</label>
                <div class="mt-1">
                  <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>

              <div>
                <NuxtLink to="/password-reset" class="text-sm font-medium dark:text-violet-500 text-violet-600 hover:text-violet-500">Forgot your password?</NuxtLink>
                <button type="submit" class="mt-2 flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-hover-300">Sign in</button>
                <div v-if="!email && !password" class="mt-6">
                  <p class="text-sm font-medium dark:text-violet-500 text-violet-600 hover:text-violet-500">Need an account?</p>
                  <NuxtLink to="/signup" class="mt-2 flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-hover-300">Sign up</NuxtLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://cms.aiku.app/uploads/26af2863_58ee_41af_b2b6_c78e57f9b898_6ed5a8d9d6.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

const client = useSupabaseAuthClient()

const email = ref('')
const password = ref('')


const signIn = async() => {
  const { data, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if(data){
    const accessToken = useCookie('sb-access-token')
    const refreshToken = useCookie('sb-refresh-token')
    accessToken.value = data.session?.access_token ?? null
    refreshToken.value = data.session?.refresh_token ?? null
  }

  if(error) {
    useNoti("error", 'Uh oh', error.message)
    return
  }
  navigateTo("/browse")
}
</script>
