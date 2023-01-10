<template>
  <div class="flex h-[80vh] lg:h-screen">
    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 class="mt-6 text-3xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900">Reset password</h2>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form class="space-y-6" @keyup.prevent.enter="resetPassword()">
              <div>
                <label for="email" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Email address</label>
                <div class="mt-1">
                  <input v-model="email" id="email" name="email" type="email" autocomplete="email" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>

              <div>
                <SubmitButton @submit="resetPassword()" submit-text="Reset password" size="md" color="violet" :submit-loading="resetPwdLoading" :is-valid-state="email !== '' || email !== null" />
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

const resetPwdLoading = ref(false)

const resetPassword = async() => {
  resetPwdLoading.value = true
  const { error } = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: `${config.public.baseUrl}/password-update`
  })

  if(error) {
    useNoti("error", 'Uh oh', error.message)
    resetPwdLoading.value = false
    return
  }

  resetPwdLoading.value = false
  useNoti("success", "Email sent", "Reset link sent to your email")
  navigateTo("/")
}
</script>
