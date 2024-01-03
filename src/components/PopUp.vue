<template>
    <Teleport to="body">
        <Transition name="modal">
            <div class="modal-mask">
                <div class="content">
                    <div class="bg-white py-6 rounded-lg">
                        <h2 class="text-center text-xl text-green-300 font-semibold">{{ title }}</h2>
                        <slot />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script lang='ts' setup>
import { defineComponent } from 'vue';

const props = defineProps({
    title: {
        type: String,
        defult: ''
    }
})

defineComponent({
    name: 'PopUpComponent'
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