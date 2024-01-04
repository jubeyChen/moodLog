<template>
  <section class="block-area pb-10">
    <ul v-if="moodList.length !== 0" class="w-[60%] mx-auto flex flex-col items-end">
      <li v-for="(list, index) in moodList" :key="index">
        <div class="w-[500px] h-fit border border-warm-200 rounded-md flex items-center justify-center py-3 hover:bg-warm-200 transition-all">
          <div class="bg-sunshine rounded-md w-[95%] h-full p-3">
            <div class=" flex justify-between items-center">
              <div class="grow flex justify-between items-center">
                <img class="w-[150px]" :src="(list.moodIcon as string)" />
                <div class="text-right text-green-300 font-semibold text-2xl">
                  <p>{{ list.date }}</p>
                  <p>{{ list.time }}</p>
                </div>
              </div>
              <div class="ml-8">
                <div class="operation-box mb-2">
                  <img src="@/assets/images/edit.svg" class="cursor-pointer w-[30px]" @click="editMood(list)"/>
                </div>

                <div class="operation-box">
                  <img src="@/assets/images/delete.svg" class="cursor-pointer w-[30px]" @click="deleteMood(list)" />
                </div>
              </div>
            </div>
            <div v-dompurify-html="list.note" class="py-4 px-14" />
          </div>
        </div>
      </li>
    </ul>

    <div v-else class="w-[60%] mx-auto text-center mt-20">
      <p class=" text-green-300 font-bold text-[30px] mb-5">目前尚未有任何心情紀錄</p>

      <Button class="mx-auto" @click="toAdd">來記錄一筆吧!</Button>
    </div>
  </section>
<EditMoodForm v-if="showEeditForm" :mood-item="editItem"/>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';
import { RoutingPath } from '@/consts/routingPath.const';
import router from '@/router';
import { onMounted, ref } from 'vue';
import EditMoodForm from '@/components/EditMoodForm.vue';
import { type MoodList } from '@/interface/moodList.interface';


const moodList = ref<MoodList[]>([]);
const editItem = ref<MoodList>();
const showEeditForm = ref(false);

onMounted(() => {
  const moodItem = localStorage.getItem('moodInfo');
  if (moodItem) {
    moodList.value = (JSON.parse(moodItem));
  }
});

function deleteMood(list: MoodList) {
  const index = moodList.value.findIndex(item => item.id === list.id)
  moodList.value.splice(index, 1);
  localStorage.removeItem('moodInfo');
  localStorage.setItem('moodInfo', JSON.stringify(moodList.value));
}

function editMood(list: MoodList) {
  editItem.value = list;
  showEeditForm.value = true;
}

function toAdd() {
  router.push(RoutingPath.Add);
}
</script>

<style scoped lang="scss">
li {
  margin-bottom: 50px;
  position: relative;
  transition: all ease 0.3s;

  &::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: theme('colors.grey.100');
    position: absolute;
    top: 50%;
    left: -200px;
  }

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: calc(150%);
    background-color: theme('colors.grey.100');
    position: absolute;
    left: -196px;
    top: 0;
  }

  &:first-child {
    &::after {
      height: calc(100% + 57px);
      top: 50%;
    }
  }

  &:last-child {
    &::after {
      top: 0;
      height: 50%;
    }
  }
}

.operation-box{
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

&:hover{
  background-color: theme('colors.warm.100');
  border-radius: 50%;
}
}
</style>
