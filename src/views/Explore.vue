<template>
  <Navbar />

  <div
    class="
      overflow-hidden
      relative
      mx-4
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
        via-gray-800/40
        to-gray-900
      "
    ></div>

    <div
      class="
        relative
        cursor-pointer
        z-10
        px-4
        pt-10
        space-y-6
        movie_info
      "
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
            <p class="text-md mb-6" v-html="title"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 object-cover">
      <img class=""
      :src="`https://picsum.photos/seed/${uuid}/600/400`" 
      loading="lazy" style="filter: grayscale(0);">
    </div>
  </div>

  <div class="grid gap-1 grid-cols-2 px-4 py-6">
    <GridColumn class="pr-1">
      <StoryCard v-for="s in leftColumnList" :story="s" :key="s.id" />
    </GridColumn>
    <GridColumn class="pl-1">
      <StoryCard v-for="s in rightColumnList" :story="s" :key="s.id" />
    </GridColumn>
  </div>
</template>


<script setup>
import randomChinese from '@/utils/ChineseLoremIpsum'
import Chance from 'chance'

const chance = Chance()

const main = useMain()
const $route = useRoute()
const uuid = $route.params.uuid
const title = randomChinese(chance.integer({ min: 5, max: 10 }), false)

main.fetchStoryList()

const leftColumnList = computed(() => main.storyList.slice(0, 10))
const rightColumnList = computed(() => main.storyList.slice(10, 20))
</script>