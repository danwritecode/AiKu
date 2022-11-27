<template>
  <div class="flex h-[80vh] lg:h-screen">
    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <!-- <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600" alt="Your Company"> -->
          <h2 class="mt-6 text-3xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900">Reset password</h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form
              @submit.prevent="resetPassword()"
              class="space-y-6"
            >
              <div>
                <label for="email" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Email address</label>
                <div class="mt-1">
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>

              <div>
                <button type="submit" class="mt-2 flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-hover-300">Reset</button>
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

const config = useRuntimeConfig()
const client = useSupabaseAuthClient()

const email = ref('')


const resetPassword = async() => {
  const { error } = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${config.public.baseUrl}/settings`
  })

  if(error) {
    useNoti("error", 'Uh oh', error.message)
    return
  }
  useNoti("error", 'Email sent', "Reset link sent to your email")
}
</script>
