<script setup>
import GridColumn from '@/components/GridColumn.vue'
import ExplorerCard from '@/components/ExplorerCard.vue'

const main = useMain()
</script>

<template>
<div class="grid gap-1 grid-cols-2 px-1 py-2 bg-gray-900">
  <GridColumn>
    <ExplorerCard v-for="i in 30" :key="i" />
  </GridColumn>
  <GridColumn>
    <ExplorerCard v-for="i in 30" :key="i" />
  </GridColumn>
</div>
</template>
