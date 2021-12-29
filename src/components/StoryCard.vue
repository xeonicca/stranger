<template>
  <div class="w-full pb-4">
    <img :src="`https://picsum.photos/seed/${uuid}/500/500`" alt="" />
    <p class="text-sm py-1 italic px-1">by {{ author }}</p>
    <p class="pt-2 prose-sm leading-6 px-1">{{ text }}</p>
  </div>
  
</template>

<script setup>
import randomChinese from '@/utils/ChineseLoremIpsum'
import { v4 as uuidv4 } from 'uuid'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const text = randomChinese(getRandomInt(10, 20), false)
const author = randomChinese(getRandomInt(5, 10), false)
let tempId = uuidv4()
const uuid = tempId.substring(0, tempId.indexOf('-'))

</script>

<style scoped></style>
