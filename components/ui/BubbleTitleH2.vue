<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template lang="pug">
.ttl.gs-fade
  div
    img(src="/assets/img/arrow-icon.svg")
    h2(v-html="text")
</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.ttl
  text-align: center
  // margin-top: 3rem
  margin-bottom: 3rem
  div
    position: relative
    display: inline-block
  img
    position: absolute
    width: 21px
    bottom: -14.5px
    left: 8rem
    +m-480
      left: 6rem
  h2
    font-family: 'GenJyuuGothic-Bold', sans-serif
    font-size: 2rem
    background-color: $amber-200
    display: inline-block
    padding: .75rem 2rem
    border: 3px solid $slate-800
    border-radius: 9999px
    color: $slate-800
    +m-480
      font-size: 1.5rem
</style>
