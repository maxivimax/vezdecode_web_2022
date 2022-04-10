<template>
  <div class="hidden duration-700 ease-in-out" data-carousel-item>
    <img class="h-full absolute m-auto top-0 left-0 right-0 bottom-0" :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: ["src", "alt"],
  components: {},
}
</script>

<style>
</style>