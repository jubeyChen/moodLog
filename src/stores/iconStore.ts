import { defineStore } from "pinia";
import { ref } from "vue";

export const useIconStore = defineStore("iconStore", () => {
  const picInfo = ref([
    {
      url: "images/pic1.png",
      title: "無語",
    },
    {
      url: "images/pic2.png",
      title: "不開心",
    },
    {
      url: "images/pic3.png",
      title: "生氣",
    },
    {
      url: "images/pic4.png",
      title: "愉悅",
    },
    {
      url: "images/pic5.png",
      title: "疲倦",
    },
    {
      url: "images/pic6.png",
      title: "無聊",
    },
  ]);

  return {
    picInfo,
  };
});
