<script setup>
import ttlSvg from "@/assets/img/kv-ttl.svg";
import girlSvg from "@/assets/img/kv-girl.svg";
import subSvg from "@/assets/img/kv-sub.svg";
const version = Date.now();
const titleSrc = `${ttlSvg}?v=${version}`;
const girlSrc = `${girlSvg}?v=${version}`;
const subSrc = `${subSvg}?v=${version}`;
</script>

<template lang="pug">

div#kv(class="imp_event pt-16 md:pt-[90px]" data-title="2025obesity" data-label="imp_section-2025obesity-home")
  client-only
    .kv
      .mx-auto.max-w-5xl.px-2
        img.kv-ttl(
          :src="titleSrc"
          alt="圓禿是自體免疫疾病，不靠美容偏方，藉由專業醫療及早介入，就能讓毛囊甦醒"
        )
        img.kv-sub(
          :src="subSrc"
          alt="圓禿是自體免疫疾病，不靠美容偏方，藉由專業醫療及早介入，就能讓毛囊甦醒"
        )
        img.kv-girl(
          :src="girlSrc"
          alt="圓禿是自體免疫疾病，不靠美容偏方，藉由專業醫療及早介入，就能讓毛囊甦醒"
        )
</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

#kv
  background: url('../assets/img/kv-bg.svg'), $blue-300
  background-repeat: no-repeat
  background-position: center 75%
  background-size: contain

  +m-768
    background-size: 150vw
    background-position: center 82%

.kv-ttl
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
