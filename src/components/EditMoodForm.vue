<template>
    <Teleport to="body">
        <Transition name="modal">
            <div class="modal-mask">
                <div class="content">
                    <div class="bg-white py-6 rounded-lg min-h-[250px] flex flex-col justify-between">
                        <div>
                            <img :src="initValue.moodIcon">
                        </div>

                        <div>
                            <EditText v-model="initValue.note" />
                        </div>

                        <div class="flex items-center justify-center">
                            <Button :outline="true" class="w-[200px] mr-5" @click="emits('close')">確認</Button>
                            <Button class="w-[200px]" @click="emits('close')">確認</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang='ts' setup>
import { defineComponent, onMounted, ref } from 'vue';
import Button from './Button.vue';
import EditText from '@/components/EditText.vue';

const props = defineProps({
    moodItem: {
        type: Object
    }
})

const initValue = ref({
    id:'',
    moodIcon: '',
    note: ''
})

onMounted(() => {
    if (props.moodItem !== undefined) {
        initValue.value.id = props.moodItem.id;
        initValue.value.moodIcon = props.moodItem.moodIcon;
        initValue.value.note = props.moodItem.note;
    }
    
})

const emits = defineEmits(['close']);


defineComponent({
    name: 'EditMoodFormComponent'
})
</script>

<style lang='scss' scoped>
.content {
    width: 85%;
    max-width: 880px;
    max-height: 95%;
    background-color: theme('colors.warm.200');
    vertical-align: middle;
    border-radius: 16px;
    box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
    padding: 20px;
}
</style>