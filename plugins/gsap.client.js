// plugins/gsap.client.js
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 1. 註冊所有外掛
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
  // 只在 client 端執行
  if (!process.client) return;

  // 2. 每次頁面渲染完成後初始化（page:finish hook）
  nuxtApp.hook("page:finish", () => {
    const wrapper = document.querySelector("#smooth-wrapper");
    if (!wrapper) return; // 無容器就跳過

    // 3. gs-fade 淡入動畫
    document.querySelectorAll(".gs-fade").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 1.5,
        ease: "power2.out",
      });
    });
  });

  // 4. 在下一次 page 開始前，釋放上次資源（page:start hook）
  nuxtApp.hook("page:start", () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.globalTimeline.clear();
  });

  // 5. 提供 $gsap 給組件使用
  return {
    provide: {
      gsap,
    },
  };
});
