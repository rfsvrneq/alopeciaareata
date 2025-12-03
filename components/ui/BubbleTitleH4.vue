<script setup>
const props = defineProps({
  no: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<template lang="pug">

.ttl-dialog.gs-fade.mb-8
  h4
    span(v-html="no")
    span(v-html="text")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.ttl-dialog
  text-align: center
  margin-top: 4rem
  span
    font-size: 22px
    background-color: white
    padding: .75rem 1.5rem
    border-radius: 9999px
    color: $slate-600
  span:first-child
    background-color: $orange-400
    color: white
    margin-right: -2rem
    position: relative
    &::after
      content: '▼'
      position: absolute
      bottom: -1.1rem
      left: 50%
      transform: translateX(-50%)
      font-size: 1rem
      color: $orange-400
  span:last-child
    padding-left: 3rem
    z-index: -1
  +m-480
    span
      padding: .5rem 1rem
      font-size: 20px
    span:first-child
      margin-right: 0rem
    span:last-child
      margin-top: .75rem
      padding-left: 1rem
      display: block
</style>
