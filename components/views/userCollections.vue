<template>
  <div class="mt-4">
    <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="collection in props.collections.data" :key="collection.id">
        <CollectionCard :collection="collection" :opts="{ showView: true }"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { GetCollectionsByUserResp } from '~/server/api/users/collections/index.get'

type userCollectionProps = {
  collections: GetCollectionsByUserResp
}
const props = defineProps<userCollectionProps>()

</script>
