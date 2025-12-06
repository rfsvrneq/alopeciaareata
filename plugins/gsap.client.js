// plugins/gsap.client.js
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 註冊所有外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// 定義共用的動畫屬性
const FADE_ANIMATION_PROPS = {
  opacity: 0,
  y: 80,
  duration: 0.8,
  ease: "power2.out",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    // gs-fade 淡入動畫
    document.querySelectorAll(".gs-fade").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          // 優化：避免向上滾動時反轉，並設定只執行一次
          toggleActions: "play none none none",
          once: true,
          // markers: true, // 開發除錯時可以打開
        },
        // 展開並傳入動畫屬性
        ...FADE_ANIMATION_PROPS,
      });
    });
  });

  // 主視覺動畫
  document.querySelectorAll("#home").forEach((svgel) => {
    // 獲取 SVG 內部需要動畫的元素
    const elTitle1 = svgel.querySelector("#title-1");
    const elTitle2 = svgel.querySelector("#title-2");
    const elTitle3 = svgel.querySelector("#girl-forward");
    const elTitle4 = svgel.querySelector("#subtitle");
    const elTitle5 = svgel.querySelector("#kv-line-1");
    const elTitle6 = svgel.querySelector("#kv-line-2");

    // 檢查元素是否存在
    if (!elTitle1 || !elTitle2) return;

    // 創建時間軸
    const svgTimeLine = gsap.timeline({
      // 將時間軸綁定到滾動觸發器
      scrollTrigger: {
        trigger: svgel,
        start: "top center", // 當容器頂部到達視窗中心時觸發
        toggleActions: "play none none reverse", // 進入播放，退出反轉
      },
    });

    // 添加元件
    svgTimeLine
      .fromTo(
        elTitle1,
        {
          transformOrigin: "center bottom",
          autoAlpha: 0,
          yPercent: 50,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.8,
          delay: 1,
          ease: "expo",
        }
      )
      .from(
        elTitle2,
        {
          yPercent: 100,
          duration: 0.8,
          ease: "expo",
        },
        "-=.5"
      )
      .from(
        elTitle3,
        {
          duration: 0.8,
          autoAlpha: 0,
          ease: "expo",
        },
        "-=.25"
      )
      .from(
        elTitle4,
        {
          autoAlpha: 0,
          duration: 0.8,
          xPercent: 50,
          ease: "expo",
        },
        "-=.25"
      )
      .from(
        elTitle5,
        {
          duration: 0.8,
          autoAlpha: 0,
          ease: "expo",
        },
        "-=.25"
      )
      .from(
        elTitle6,
        {
          duration: 0.8,
          autoAlpha: 0,
          ease: "expo",
        },
        "-=.25"
      );
  });

  // 在下一次 page 開始前，釋放上次資源
  nuxtApp.hook("page:start", () => {
    // 關鍵：銷毀所有 ScrollTrigger 實例以防止記憶體洩漏
    ScrollTrigger.getAll().forEach((t) => t.kill());
  });

  // 提供 $gsap 給組件使用
  return {
    provide: {
      gsap,
      ScrollTrigger, // 也將 ScrollTrigger 暴露出去，方便組件內使用
    },
  };
});
