<script setup>
import { useMain } from '@/stores/main'
import { computed } from 'vue'

const main = useMain()

onMounted(async () => {
  await main.fetchPonderList(60)
})

const leftColumnList = computed(() => main.ponderList.slice(0, 30))
const rightColumnList = computed(() => main.ponderList.slice(30, 60))
</script>

<template>
<div class="grid gap-1 grid-cols-2 px-1 py-2 bg-gray-900">
  <GridColumn>
    <ExplorerCard v-for="p, i in leftColumnList" :ponder="p" :key="i" />
  </GridColumn>
  <GridColumn>
    <ExplorerCard v-for="p, i in rightColumnList" :ponder="p" :key="i" />
  </GridColumn>
</div>
</template>
