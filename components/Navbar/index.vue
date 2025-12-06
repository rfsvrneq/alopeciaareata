<script setup>
const nav = [
  {
    title: "認識圓禿",
    active: false,
    type: "#about",
    label: "menu_認識圓禿",
  },
  {
    title: "誰會得圓禿？",
    active: false,
    type: "#who",
    label: "menu_誰會得圓禿",
  },
  {
    title: "圓禿的影響",
    active: false,
    type: "#impact",
    label: "menu_圓禿的影響",
  },
  {
    title: "治療與行動",
    active: false,
    type: "#care",
    label: "menu_治療與行動",
  },
  {
    title: "就醫諮詢",
    active: false,
    type: "#consult",
    label: "menu_就醫諮詢",
  },
  {
    title: "拯救圓禿保衛戰",
    active: false,
    type: "https://www.derma.org.tw/resources/content.php?id=120",
    label: "menu_拯救圓禿保衛戰",
  },
];

let burgerTrigger = ref(false);
let isActive = ref("");

const scrollActive = ref(false); // 監聽滾動的狀態

// 處理滾動事件
const handleScroll = () => {
  scrollActive.value = window.scrollY > 200;
};

// 綁定與移除監聽
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // 初始化一次，避免直接載入就已捲動過200
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// 點擊導覽列移動
const moveTo = (ta) => {
  const offset = 0;
  const target = document.querySelector(ta);
  if (target) {
    const targetOffset = target.offsetTop - 30 - offset;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });
    burgerTrigger.value = false;
    isActive.value = ta;
  }
};
</script>

<template lang="pug">
//- float
//- a#float.click_event(@click.prevent="moveTo('#experts')" data-title="alopeciaareata" data-label="click-LiliBMI-btn-calculator-expert4")
  img(src="/assets/img/go.svg", alt="go")

a#float.click_event(href="https://www.derma.org.tw/resources/content.php?id=120" target="_blank" data-title="alopeciaareata" data-label="click-alopeciaareata-btn-float")
  img(src="/assets/img/hair.svg", alt="立即諮詢")

div#topbar(:class="['w-full fixed top-0 left-0', { scrolled: scrollActive }]")
  
  nav.flex.justify-between.items-center.h-full.container.p-0.max-w-6xl
    
    .flex.space-x-2.items-center.mr-6
      //- logo
      a.block(href="https://www.commonhealth.com.tw/", target="_blank") 
        img.w-20(src="/assets/img/logo.svg", alt="康健雜誌")

    //- 漢堡
    a.burger-trigger(href="#", :class="{ 'active': burgerTrigger == true }", @click.prevent="burgerTrigger = !burgerTrigger")
      span.first
      span.middle
      span.last
    
    //-導覽列
    .nav-wrap(:class="{ 'active': burgerTrigger == true }")
      //-選單
      .nav
        .item
          template(v-for="(item, index) in nav" :key="index")
            //- 錨點：內部移動
            a.click_event(
              v-if="!item.type.startsWith('http')"
              data-title="alopeciaareata"
              :href="item.type"
              :class="{ 'active': isActive === item.type }"
              :data-label="item.label"
              v-html="item.title"
              @click.prevent="moveTo(item.type)"
            )

            //- 外部連結：正常開新分頁
            a.click_event(
              v-else
              data-title="alopeciaareata"
              :href="item.type"
              target="_blank"
              rel="noopener noreferrer"
              :data-label="item.label"
              v-html="item.title"
            )

      //- .nav
        .item    
          a.click_event(
            data-title="alopeciaareata"
            v-for="(nav, index) in nav"
            :key="index"
            :href="nav.type"
            :class="{ 'active': isActive === nav.type }"
            @click.prevent="moveTo(nav.type)"
            :data-label="nav.label"
            v-html="nav.title"
          )
</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *

$nav-item-a: #3d4654 !default
$nav-item-a-hover: #607af1 !default
$nav-wrap-bg: #bdd1f9 !default
$burger: #985545 !default
$nav-wrap-bg-mobile: #7794e5 !default
$nav-item-a-mobile: white !default
$nav-item-a-hover-mobile: white !default


#topbar
  height: auto
  z-index: 20
  background: $nav-wrap-bg
  padding: 1.25rem 0
  +m-1024
    padding: .5rem 1rem
  &.scrolled
    background-color: rgba($nav-wrap-bg, .5)
    backdrop-filter: blur(10px)
    border-bottom: 1px solid rgba(255, 255, 255, .85)
    padding: .5rem 1rem
    transition: background-color .3s ease, padding .3s ease
  .item
    position: relative
    +m-1024-up
      display: flex
      align-items: center
    a
      color: $nav-item-a
      font-weight: 400
      font-size: 1.075rem
      margin-left: 1.25rem
      &:hover
        color: $nav-item-a-hover
        span
          color: $nav-item-a-hover

      // 外站連結 桌機額外樣式
      +m-1024-up
        &:last-child
          color: white
          padding: 0rem 2.75rem
          display: flex
          flex-direction: column
          text-align: center
          position: relative
          line-height: 1.25
          margin-top: -.25rem
          &::after
            content: "‒ 就醫諮詢 ‒"
            font-size: 1.3rem
          &::before
            content: ""
            background: #985545
            width: 100%
            height: 115px
            position: absolute
            z-index: -1
            top: -30px
            left: 0
            border-bottom-left-radius: 999px
            border-bottom-right-radius: 999px
          &:hover
            &::before
              background: #607af1

  //-行動裝置漢堡與導覽列
  @media screen and (max-width: 1024px)
    padding-right: 15px

    //漢堡
    .burger-trigger
      z-index: 999
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      width: 40px
      height: 40px
      outline: 0
      &, & span
        transition: .2s
        backface-visibility: hidden
        transform-style: preserve-3d
      span
        position: relative
        display: block
        width: 100%
        height: 2px
        background: $burger


      //open
      &.active
        .first, .last
          background: $burger
        .middle
          opacity: 0 !important
        .first
          top: 13px
          transform: rotate(45deg)
        .last
          bottom: 13px
          transform: rotate(135deg)

    //-導覽列
    .nav-wrap
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      overflow: hidden
      opacity: 0
      transform-origin: right top
      transform: translateY(-100%)
      transition: transform .4s ease, opacity .4s ease
      background-color: $nav-wrap-bg-mobile
      min-height: 100vh

      // open
      &.active
        opacity: 1
        transform: translateY(0)

      //-選單
      .nav
        z-index: 99
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
      .item
        width: 100%
        a
          display: block
          text-align: center
          width: 100%
          font-size: 1.35rem
          margin-bottom: 1remt
          margin-left: 0
          padding-top: .5rem
          padding-bottom: .5rem
          transition: color .3s ease
          color: $nav-item-a-mobile
          &:hover
            background: $nav-item-a-hover-mobile
            color: $nav-wrap-bg-mobile
            transition: color .3s ease

  //-mobile
  @media screen and (max-width: 540px)
    //漢堡
    .burger-trigger
      width: 30px
      height: 30px
      //open
      &.active
        .first
          top: 10px
        .last
          bottom: 10px

// 外連結
#float
  position: fixed
  bottom: 10%
  right: 1rem
  width: 180px
  height: auto
  z-index: 20
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  transition: all ease .1s
  img
    width: 100%
  &:hover
    transition: all ease .1s
    transform: translateY(5px)
  +m-768
    width: 140px
    height: 140px
    bottom: .5rem
    right: .5rem
</style>
