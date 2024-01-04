<template>
    <button
        class="block px-6 py-3 rounded-md font-semibold text-lg tracking-wider"
        :class="{'bg-warm-200 text-white hover:bg-green-200': !outline, 
        'bg-white text-warm-200 outline outline-warm-200 hover:outline-green-200 hover:text-green-200': outline}">
        <slot />
    </button>
</template>

<script lang='ts' setup>
import { defineComponent } from 'vue';

const props = defineProps({
    outline: {
        type: Boolean,
        default: false
    }
})

defineComponent({
    name: 'ButtonComponent'
})
</script>

<style lang='scss' scoped></style>