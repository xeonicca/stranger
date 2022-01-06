<template>
  <a class="block w-full pb-4" @click="$router.push(`/story/${id}`)">
    <img :src="`https://picsum.photos/seed/${id}/500/500`" alt="" />
    <p class="text-sm py-2 italic px-1">{{ createTime }}</p>
    <p class="text-sm py-1 italic px-1">by {{ author }}</p>
    <p class="pt-2 prose-sm leading-6 px-1">{{ content }}</p>
  </a>
  
</template>

<script setup>
const props = defineProps({
  story: Object,
})

const { id, author, content, createTime } = toRefs(props.story)
</script>
