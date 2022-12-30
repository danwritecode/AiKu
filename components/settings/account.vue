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

            <div class="mt-6 grid grid-cols-4 gap-6">
              <div class="col-span-4 sm:col-span-2">
                <label for="first-name" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">First name</label>
                <input type="text" name="first-name" id="first-name" class="mt-1 block w-full dark:bg-zinc-800 rounded-md border dark:border-zinc-500 border-zinc-300 py-2 px-3 shadow-sm focus:border-violet-600 focus:outline-none focus:ring-violet-900 sm:text-sm transition-hover-300">
              </div>

              <div class="col-span-4 sm:col-span-2">
                <label for="last-name" class="block text-sm font-medium dark:text-zinc-300 text-zinc-700">Last name</label>
                <input type="text" name="last-name" id="last-name" class="mt-1 block w-full dark:bg-zinc-800 rounded-md border dark:border-zinc-500 border-zinc-300 py-2 px-3 shadow-sm focus:border-violet-600 focus:outline-none focus:ring-violet-900 sm:text-sm transition-hover-300">
              </div>
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
