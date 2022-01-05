<script setup>
import vIntersect from '@/directives/intersect'
const props = defineProps({
  ponder: Object,
})

const { id, content, question, storyCount } = toRefs(props.ponder)
</script>

<template>
  <a
    class="flex max-w-sm w-full bg-white shadow-md overflow-hidden mx-auto mb-1"
    @click="$router.push(`/explore/${id}`)"
  >
    <div class="overflow-hidden relative w-full text-white">
      <div
        class="
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-stone-300/20
          via-gray-800/70
          to-gray-900
        "
      ></div>

      <div class="relative cursor-pointer z-10 movie_info">
        <span
          class="
            absolute
            top-2
            right-2
            rounded-2xl
            py-[2px]
            px-[6px]
            text-xs
            bg-gray-900/75
          "
          >{{ storyCount }}則故事</span
        >
        <div class="poster__info align-self-end w-full">
          <div :class="`h-[150px]`"></div>
          <div class="space-y-6 detail_info">
            <!-- <div class="flex flex-col space-y-2 inner">
              <h3
                class="text-xl font-bold"
                v-html="title"
              ></h3>
            </div> -->
            <div class="flex flex-col overview">
              <div class="flex flex-col"></div>
              <p class="p-4 text-md" v-html="question"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 object-cover">
        <img
          class=""
          :src="`https://picsum.photos/seed/${id}/600/900`"
          loading="lazy"
          style="filter: grayscale(0)"
        />
      </div>
    </div>
  </a>
</template>

<style>
.grid-card {
  font-family: 'Noto Sans TC';
  /* width: 100%; */
}
</style>
