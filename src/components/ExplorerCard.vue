<script setup>
import vIntersect from '@/directives/intersect'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

import { v4 as uuidv4 } from 'uuid'
import randomChinese from '@/utils/ChineseLoremIpsum'

// const randomHeight = getRandomInt(500, 800);

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const $router = useRouter()

const text = randomChinese(getRandomInt(20, 90))
const title = randomChinese(getRandomInt(8, 20), false)
let tempId = uuidv4()
const uuid = tempId.substring(0, tempId.indexOf('-'))
const randomHype = getRandomInt(10, 100)
const onIntersect = (entries, observer, isIntersecting) => {
  entries[0].target.classList.toggle('in-view', isIntersecting)
}
</script>

<template>
  <a
    class="flex max-w-sm w-full bg-white shadow-md overflow-hidden mx-auto mb-1"
    v-intersect="{ handler: onIntersect }"
    @click="$router.push(`/explore/${uuid}`)"
  >
    <div
      class="
        overflow-hidden
        relative
        w-full
        shadow-lg
        hover:shadow-2xl
        text-white
      "
    >
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

      <div class="relative cursor-pointer z-10 px-4 pt-10 space-y-6 movie_info">
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
              <p class="text-md mb-6" v-html="title"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 object-cover">
        <img
          class=""
          :src="`https://picsum.photos/seed/${uuid}/600/900`"
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
