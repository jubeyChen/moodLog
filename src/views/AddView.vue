<template>
    <section class="block-area">
        <div class="add-container">
            <div v-show="currentStep == 1" class="add-box pt-[50px]">
                <h1 class="text-center text-green-300 font-bold text-2xl mb-6">嗨! 今天心情如何呢?</h1>

                <div class="grid grid-cols-3 gap-6 w-[75%] mx-auto">
                    <div v-for="(pic, index) in picInfo" :key="index" class=" h-[180px] col-span-1">
                        <img class="mood-pic cursor-pointer w-full h-full object-contain" :src="pic.url"
                            @click="addIcon(pic)">
                    </div>
                </div>
            </div>

            <div v-show="currentStep == 2" class="add-box flex justify-between items-center px-12">
                <div>
                    <div class="w-[300px] h-[300px] hover:-translate-y-1.5 transition-all">
                        <img :src="moodInfo.moodIcon" @click="showChangeIcon = true"
                            class="cursor-pointer w-full h-full object-contain">
                    </div>

                    <div class="text-green-300 font-semibold text-center text-2xl">
                        <p class="mb-2">{{ moodInfo.date }}</p>
                        <p>{{ moodInfo.time }}</p>
                    </div>
                </div>

                <div class="w-[60%] flex flex-col">
                    <div class="w-full mb-6">
                        <EditText v-model="moodInfo.note" />
                    </div>

                    <Button @click="save">
                        儲存
                    </Button>
                </div>
            </div>
        </div>

        <ChangeIconModal v-if="showChangeIcon" @change="changeIcon"/>

        <MessageModal v-if="showMessage" @close="redirect">
            新增完成！
        </MessageModal>
    </section>
</template>

<script lang='ts' setup>
import { useIconStore } from '@/stores/iconStore';
import moment from 'moment';
import { storeToRefs } from 'pinia';
import Button from '@/components/Button.vue';
import { onMounted, ref } from 'vue';
import EditText from '@/components/EditText.vue';
import router from '@/router';
import { RoutingPath } from '@/consts/routingPath.const';
import MessageModal from '@/components/MessageModal.vue';
import ChangeIconModal from '@/components/ChangeIconModal.vue';

const iconStore = useIconStore();
const { picInfo } = storeToRefs(iconStore);
const editor = ref<any>();
const showChangeIcon = ref(false);
const showMessage = ref(false);
const currentStep = ref(1);
const moodInfo = ref({
    id: Date.now().toString(),
    moodIcon: '',
    time: '',
    date: '',
    note: ''
})



function addIcon(pic: any) {
    currentStep.value++;
    moodInfo.value.moodIcon = pic.url;
    moodInfo.value.time = moment().format('HH:mm');
    moodInfo.value.date = moment().format('YYYY-MM-DD');
    moodInfo.value.moodIcon = pic.url;
}

function changeIcon(pic: any) {
    showChangeIcon.value = false;
    moodInfo.value.moodIcon = pic.url;
}

function save() {
    let tempMood = [];
    const preMood = localStorage.getItem('moodInfo');
   
    if (preMood) {
        tempMood = JSON.parse(preMood);
    }
    tempMood.push({ ...moodInfo.value });
    localStorage.removeItem('moodInfo');
    localStorage.setItem('moodInfo', JSON.stringify(tempMood));
    showMessage.value = true;
}

function redirect() {
    showMessage.value = false;
    router.push(RoutingPath.Home);
}

</script>

<style lang='scss' scoped>
.add-container {
    width: 100%;
    height: 600px;
    border: 2px solid theme('colors.warm.200');
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .add-box {
        width: 98%;
        height: 96%;
        background-color: theme('colors.sunshine');
        border: 2px solid white;
        border-radius: 20px;
    }
}

.mood-pic {
    transition: all ease 0.3s;

    &:hover {
        transform: scale(1.15) rotate(10deg);
    }
}
</style>