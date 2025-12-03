<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template lang="pug">

.ttl-round.gs-fade
  h3(v-html="text")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

.ttl-round
  text-align: center
  margin-top: 4rem
  margin-bottom: 4rem
  +m-480
    margin-top: 3rem
    margin-bottom: 3rem
  h3
    font-family: 'GenJyuuGothic-Bold', sans-serif
    font-size: 1.75rem
    background-color: white
    display: inline-block
    padding: .5rem 2rem
    border-radius: 9999px
    color: $slate-800
    +m-480
      font-size: 1.25rem
</style>
