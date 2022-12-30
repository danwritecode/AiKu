<template>
  <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
    <section aria-labelledby="payment-details-heading">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="bg-white py-6 px-4 sm:p-6">
            <div>
              <h2 id="payment-details-heading" class="text-lg font-medium leading-6 text-zinc-900">Update Account Info</h2>
              <p class="mt-1 text-sm text-zinc-500">Update your account info</p>
            </div>

            <div class="mt-6 grid grid-cols-4 gap-6">
              <div class="col-span-4 sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium text-zinc-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="cc-given-name" class="mt-1 block w-full rounded-md border border-zinc-300 py-2 px-3 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-zinc-900 sm:text-sm">
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label for="last-name" class="block text-sm font-medium text-zinc-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="cc-family-name" class="mt-1 block w-full rounded-md border border-zinc-300 py-2 px-3 shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-zinc-900 sm:text-sm">
              </div>
            </div>
          </div>
          <div class="bg-zinc-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-zinc-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>
