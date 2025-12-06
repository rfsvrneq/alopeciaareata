<script setup></script>

<template lang="pug">
//- 前言
div#intro.bg-blue-100.z-10.relative(class="imp_event" data-title="alopeciaareata" data-label="imp_section-alopeciaareata-home")
  .container
    img.mx-auto.mb-10(src="../assets/img/intro-img-1.svg", alt="icon" class="w-6")
    
    .content-p.text-center.gs-fade
      p.inline(class="sm:block") 睡一覺起來，頭髮竟缺了一塊！ 
      p.inline(class="sm:block") 很多人以為只是單純的落髮，
      p.inline(class="sm:block") 但最新醫學研究發現，圓禿（Alopecia Areata）其實是免疫疾病，
      p.inline(class="sm:block") 所幸隨醫學進步已經有很明確的治療方法。
      p.inline(class="sm:block") 圓禿是一種自體免疫疾病，誘發的原因很多，包括壓力、環境、
      p.inline(class="sm:block") 病毒或細菌感染、藥物、睡眠障礙、抽菸等。

    .content-h4.gs-fade.relative
      img.absolute.left-0.-top-12(src="../assets/img/intro-img-2.svg", alt="icon", class="w-7 sm:w-12")
      p.inline(class="sm:block") 不過，圓禿並非是「不治之症」，
      p.inline(class="sm:block") 只要確定病因並投以藥物，就能讓
      p.inline(class="sm:block") 進入暫時休眠的毛囊重新甦醒長出毛髮。
      img.absolute.right-0.-bottom-10(src="../assets/img/intro-img-3.svg", alt="icon", class="w-14 sm:w-20")
</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *

#intro
  clip-path: ellipse(130% 100% at 50% 100%)
  margin-top: -13.7rem
  +m-768
    clip-path: ellipse(200% 100% at 50% 100%)
    margin-top: -11rem
  +m-640
    margin-top: -10.5vh
</style>
