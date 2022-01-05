<script setup>

const main = useMain()
main.fetchPonderList(60)

const leftColumnList = computed(() => main.ponderList.slice(0, 30))
const rightColumnList = computed(() => main.ponderList.slice(30, 60))
</script>

<template>
<nav class="w-full p-4 bg-neutral-900 flex justify-between">
  <h1><img src="/images/nav-logo.png" alt="hero"></h1>
  <a class="font-bold text-white" href=""
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h7"
      /></svg
  ></a>
</nav>

<div class="w-full px-8 bg-neutral-900">
  <img src="https://picsum.photos/316/194" alt="hero">
</div>

<div class="w-full px-8 pt-8 pb-10 bg-neutral-900 flex justify-center">
  <img src="/images/hero-logo.png" alt="hero">
</div>


<div class="grid gap-1 grid-cols-2 px-1 py-2 bg-neutral-900">
  <GridColumn>
    <ExplorerCard v-for="p, i in leftColumnList" :ponder="p" :key="i" />
  </GridColumn>
  <GridColumn>
    <ExplorerCard v-for="p, i in rightColumnList" :ponder="p" :key="i" />
  </GridColumn>
</div>
</template>
