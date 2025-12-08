<script setup>
import BubbleTitleH2 from "../ui/BubbleTitleH2.vue";

const slides = [
  {
    url: "https://www.commonhealth.com.tw/article/88553",
    imgSrc:
      "https://as.chdev.tw/web/article/6/f/4/6add82df-fe48-48b3-b57d-8356d4b52f7c1691133545.jpg",
    title: "禿頭3大原因與前兆，禿頭有救嗎？掌握禿頭治療與預防",
    label: "click-alopeciaareata-article-commonhealth-88553",
  },
  {
    url: "https://www.commonhealth.com.tw/article/92941",
    imgSrc:
      "https://as.chdev.tw/web/article/d/f/4/da27d549-fa3a-4065-96d6-eb865defc5a21754273287.webp",
    title:
      "掉髮愈治愈嚴重？當心你得了「這種禿」，醫破除迷思：別再找「植髮專科」！",
    label: "click-alopeciaareata-article-commonhealth-92941",
  },
  {
    url: "https://www.commonhealth.com.tw/article/90560",
    imgSrc:
      "https://as.chdev.tw/web/article/4/9/4/49e06e2e-9457-43b1-8ab1-b386ded9975b1726041981.jpg",
    title:
      "25歲女「鬼剃頭」天天以淚洗面，醫：圓禿千萬別用生髮水！3方法助長新髮",
    label: "click-alopeciaareata-article-commonhealth-90560",
  },
  {
    url: "https://www.commonhealth.com.tw/article/87991",
    imgSrc:
      "https://as.chdev.tw/web/article/b/1/4/b4a23b67-1b58-4983-b49b-86289ab18cca1682069600.jpg",
    title: "鬼剃頭」被疑罹怪病！徐乃麟女兒圓形禿　新藥可有效治療",
    label: "click-alopeciaareata-article-commonhealth-87991",
  },
  {
    url: "https://www.commonhealth.com.tw/article/82711",
    imgSrc:
      "https://as.chdev.tw/web/article/1/7/4/1504f08a-7140-4106-91de-e6e501e437f71642649945.jpg",
    title: "頭皮禿一塊「鬼剃頭」怎麼辦？中醫：掉髮、班禿從3方面改善",
    label: "click-alopeciaareata-article-commonhealth-82711",
  },
];
</script>

<template>
  <div class="bg-amber-50">
    <div
      class="max-w-6xl mx-auto imp_event pb-0"
      id="slide"
      data-title="alopeciaareata"
      data-label="imp_section-alopeciaareata-article"
    >
      <!-- 引用標題元件 -->
      <BubbleTitleH2 text="相關報導"></BubbleTitleH2>

      <!-- 輪播設定 -->
      <div class="relative px-16 md:px-28">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :modules="[
            SwiperPagination,
            SwiperGrid,
            SwiperNavigation,
            SwiperAutoplay,
            SwiperEffectCreative,
          ]"
          :grid="{
            rows: 1,
          }"
          :breakpoints="{
            '320': {
              slidesPerView: 1,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
            '768': {
              slidesPerView: 2,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
            '1024': {
              slidesPerView: 3,
              grid: {
                rows: 1,
                fill: 'row',
              },
            },
          }"
        >
          <!-- 輪播內容 -->
          <swiper-slide
            v-for="(slide, index) in slides"
            :key="slide"
            class="overflow-hidden rounded-2xl"
          >
            <a
              class="click_event"
              data-title="alopeciaareata"
              :data-label="slide.label"
              :href="slide.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                class="slide-img"
                :style="{ backgroundImage: 'url(' + slide.imgSrc + ')' }"
              ></div>
              <p class="bg-orange-50 text-left p-3 content-xs">
                <span class="line-clamp-2">{{ slide.title }}</span>
                <span class="block text-sm text-right text-slate-600"
                  >more ›</span
                >
              </p>
            </a>
          </swiper-slide>
        </swiper>

        <!-- 輪播控制 -->
        <div class="swiper-button-prev swiper-button-prev-slide"></div>
        <div class="swiper-button-next swiper-button-next-slide"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.slide-img
  width: 100%
  height: 160px
  background-size: cover
  background-position: center
.swiper-button-prev:after, .swiper-button-next:after
  font-size: 0
  content: ''
  background-image: url('/assets/img/swiper-next.svg')
  background-size: contain
  background-repeat: no-repeat
  width: 100%
  height: 100%
.swiper-button-next, .swiper-button-prev
  width: 70px
  height: 70px
  @media screen and (max-width: 768px)
    width: 45px
    height: 45px
.swiper-button-prev:after
  transform: scaleX(-1)
</style>
