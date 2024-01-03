<template>
  <section class="block-area">
    <ul>
      <li v-for="(list, index) in moodList" :key="index">
        <div class="w-[500px] h-[500px] border border-warm-200 rounded-md flex items-center justify-center">
          <div class="bg-sunshine rounded-md w-[95%] h-[95%] p-3">
            <div class=" flex justify-between items-center">
              <div class="grow flex justify-between items-center">
                <img class="w-[150px]" :src="list.moodIcon">
                <div class="text-right text-green-300 font-semibold text-2xl">
                  <p>{{ list.date }}</p>
                  <p>{{ list.time }}</p>
                </div>
              </div>
              <div class="ml-8">
                <img src="@/assets/images/edit.svg" class="cursor-pointer w-[30px] mb-6" />
                <img src="@/assets/images/delete.svg" class="cursor-pointer w-[30px]" />
              </div>
            </div>
            <div v-dompurify-html="list.note" class="py-4 px-14" />
          </div>
        </div>
        {{ list }}

      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const moodList = ref<any>([]);


onMounted(() => {
  const moodItem = localStorage.getItem('moodInfo');
  if (moodItem) {
    moodList.value = (JSON.parse(moodItem));
  }
});
</script>
