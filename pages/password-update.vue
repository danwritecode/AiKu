<template>
  <div class="flex h-[80vh] lg:h-screen">
    <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <h2 class="mt-6 text-3xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900">Update password</h2>
          <p class="mt-1 max-w-4xl text-sm dark:text-zinc-400 text-zinc-500">Enter your new password below.</p>
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form class="space-y-4" @keyup.prevent.enter="updatePassword()">
              <div>
                <label for="password" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Password</label>
                <div class="mt-1">
                  <input v-model="password" id="password" name="password" type="password" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>
              <div>
                <label for="password-confirm" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Confirm Password</label>
                <div class="mt-1">
                  <input v-model="passwordConfirm" id="password-confirm" name="password-confirm" type="password" required class="block w-full appearance-none rounded-md dark:text-zinc-300 dark:bg-zinc-800 border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm transition-hover-300">
                </div>
              </div>
              <div>
                <SubmitButton @submit="updatePassword()" submit-text="Update password" size="md" color="violet" :submit-loading="updatePwdLoading" :is-valid-state="submitValid" />
                <p v-if="!passwordValid" class="mt-2 text-red-500 text-sm text-center">Passwords don't match</p>
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
const user = useSupabaseUser()

const password = ref('')
const passwordConfirm = ref('')

const passwordValid = computed(() => {
  // If both are null or blank then return true
  if (
    (password.value === '' && passwordConfirm.value === '') ||
    (password.value === null && passwordConfirm.value === null)
  ) {
    return true
  }

  if (password.value !== passwordConfirm.value) {
    return false
  }

  return true
})

const submitValid = computed(() => {
  if (
    (password.value === '' && passwordConfirm.value === '') ||
    (password.value === null && passwordConfirm.value === null)
  ) {
    return false
  }

  if (password.value !== passwordConfirm.value) {
    return false
  }

  return true
})


const updatePwdLoading = ref(false)

const updatePassword = async () => {
  updatePwdLoading.value = true
  const { error } = await client.auth.updateUser({
    password: password.value
  })

  if (error) {
    useNoti("error", 'Uh oh', error.message)
    updatePwdLoading.value = false
    return
  }

  updatePwdLoading.value = false

  if (user) {
    navigateTo("/my-stuff")
    useNoti("success", "Password reset", "Password successfully changed.")
    return
  }

  useNoti("success", "Password reset", "Password successfully changed. Please login again.")
  navigateTo("/login")
}
</script>
