<template>
  <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
    <section aria-labelledby="payment-details-heading">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="dark:bg-zinc-900 bg-white py-6 px-4 sm:p-6">
            <div>
              <h2 id="payment-details-heading" class="text-lg font-medium leading-6 dark:text-zinc-100 text-zinc-900">Reset password</h2>
              <p class="mt-1 text-sm dark:text-zinc-400 text-zinc-500">Reset your password here. You will receive a link to reset your password.</p>
            </div>

            <div class="mt-6 w-1/2 sm:w-full">
              <p class="text-sm dark:text-zinc-400 text-zinc-500">Reset Password</p>
              <SubmitButton @submit="resetPassword()" submit-text="Reset password" size="md" color="violet" :submit-loading="resetPwdLoading" :is-valid-state="true" class="mt-1.5"/>
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const user = useSupabaseUser()
const client = useSupabaseAuthClient()

const resetPwdLoading = ref(false)

const resetPassword = async() => {
  resetPwdLoading.value = true
  const { error } = await client.auth.resetPasswordForEmail(user.value?.email!, {
    redirectTo: `${config.public.baseUrl}/password-update`
  })

  if(error) {
    useNoti("error", 'Failed to reset password', error.message)
    resetPwdLoading.value = false
    return
  }

  resetPwdLoading.value = false
  useNoti("success", "Email sent", "Reset link sent to your email")
}

</script>
