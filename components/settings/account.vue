<template>
  <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
    <section aria-labelledby="payment-details-heading">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="dark:bg-zinc-900 bg-white py-6 px-4 sm:p-6">
            <div>
              <h2 id="payment-details-heading" class="text-lg font-medium leading-6 dark:text-zinc-100 text-zinc-900">Update Account Info</h2>
              <p class="mt-1 text-sm dark:text-zinc-400 text-zinc-500">Update account information</p>
            </div>

            <div class="mt-6">
              <p class="text-sm dark:text-zinc-400 text-zinc-500">Delete User</p>
              <SubmitButton @submit="showRealDeleteUser = true" submit-text="Delete user" size="md" color="violet" :submit-loading="false" :is-valid-state="!showRealDeleteUser" class="mt-1.5" />
              <SubmitButton v-if="showRealDeleteUser" @submit="deleteUser()" submit-text="Confirm deletion" size="md" color="violet" :submit-loading="deleteUserLoading" :is-valid-state="true" class="mt-1.5" />
            </div>
          </div>
          <div class="dark:bg-zinc-900 dark:border-t dark:border-zinc-600 bg-zinc-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 transition-hover-300">Save</button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
const showRealDeleteUser = ref(false)

const deleteUserLoading = ref(false)

const deleteUser = async () => {
  deleteUserLoading.value = true
  const { error: deleteError } = await useFetch("/api/users", {
    method: "DELETE",
    headers: useRequestHeaders(['cookie']) as Record<string,string>
  })
  
  if (deleteError.value) {
    useNoti("error", "Well this is awkward", "Something went wrong when deleting your user. This was not an intentional ploy to stop you from leaving. Please reach out to us and we will take care of it.")
    deleteUserLoading.value = false
    return
  }

  deleteUserLoading.value = false
  signOut()
}

const signOut = () => {
  const accessToken = useCookie('sb-access-token')
  const refreshToken = useCookie('sb-refresh-token')
  accessToken.value = null
  refreshToken.value = null
  navigateTo("/") 
}
</script>
