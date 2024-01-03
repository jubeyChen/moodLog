<template>
    <Teleport to="body">
        <Transition name="modal">
            <div class="modal-mask">
                <div class="content">
                    <div class="bg-white py-6 rounded-lg min-h-[250px] flex flex-col justify-between">
                        <div class="text-2xl text-green-300 font-bold text-center mt-[50px]">
                            <slot />
                        </div>

                        <Button class="w-[200px] mx-auto" @click="emits('close')">確認</Button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang='ts' setup>
import { defineComponent } from 'vue';
import Button from './Button.vue';

const emits = defineEmits(['close']);


defineComponent({
    name: 'MessageModalComponent'
})
</script>

<style lang='scss' scoped>
.content {
        width: 85%;
        max-width: 480px;
        max-height: 95%;
        background-color: theme('colors.warm.200');
        vertical-align: middle;
        border-radius: 16px;
        box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.25);
        padding: 20px;
    }
</style>