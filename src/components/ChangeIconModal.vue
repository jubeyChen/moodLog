<template>
    <PopUp :title="'更新你的心情貼圖'">
        <div class="grid grid-cols-3 gap-6 w-[75%] mx-auto my-5">
            <div v-for="(pic, index) in picInfo" :key="index" class=" h-[180px] col-span-1">
                <img class="mood-pic cursor-pointer w-full h-full object-contain" :src="pic.url" @click="emits('change', pic)">
            </div>
        </div>
    </PopUp>
</template>

<script lang='ts' setup>
import PopUp from '@/components/PopUp.vue';
import { useIconStore } from '@/stores/iconStore';
import { storeToRefs } from 'pinia';

const iconStore = useIconStore();
const { picInfo } = storeToRefs(iconStore);

const emits = defineEmits(['change']);
</script>

<style lang='scss' scoped></style>