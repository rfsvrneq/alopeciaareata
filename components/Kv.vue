<script setup>
import ttlSvg from "~/assets/img/kv-ttl.svg?raw"; // 把 SVG 檔案當作字串引入
import girlSvg from "~/assets/img/kv-girl.svg?raw"; // 把 SVG 檔案當作字串引入
import subSvg from "~/assets/img/kv-sub.svg?raw"; // 把 SVG 檔案當作字串引入
</script>

<template lang="pug">

div#home(class="imp_event pt-16 md:pt-[90px]" data-title="alopeciaareata" data-label="imp_section-alopeciaareata-home")
  .kv
    .mx-auto.max-w-5xl.px-2
      #kv-ttl(v-html="ttlSvg")
      .kv-sub(v-html="subSvg")
      .kv-girl(v-html="girlSvg")

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

#home
  background: url('../assets/img/kv-bg.svg'), $blue-300
  background-repeat: no-repeat
  background-position: center 75%
  background-size: contain
  +m-768
    background-size: 150vw
    background-position: center 82%

#kv-ttl
  max-width: 770px
  width: 100%
  margin-left: auto
  margin-right: auto

.kv-sub
  margin-left: auto
  max-width: 660px
  width: 100%
  margin-top: -3.5rem
  margin-right: 2rem
  position: relative
  +m-1024
    margin-top: 0rem
    margin-right: 0rem
  +m-768
    margin-top: 1rem

.kv-girl
  max-width: 770px
  margin-right: auto
  margin-left: auto
  margin-top: -3.5rem
  margin-bottom: -3.5rem
  z-index: 0
  +m-1024
    margin-top: -2rem
  +m-768
    margin-top: 0rem
</style>
