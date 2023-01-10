<template>
  <div class="flex h-[80vh] min-h-full flex-col dark:bg-zinc-800 pt-16 pb-12">
    <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div class="py-16">
        <div class="text-center">
          <p class="text-base font-semibold text-red-600">500</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight dark:text-zinc-100 text-zinc-900 sm:text-5xl">An unexpected error occured</h1>
          <p class="mt-2 text-base dark:text-zinc-400 text-zinc-500">Sorry, something went wrong that we weren't prepared to handle :/</p>
          <div class="mt-6">
            <NuxtLink to="/" class="text-base font-medium text-violet-600 hover:text-violet-500">
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
