<template>
    <button
        class="block bg-warm-200 text-white px-6 py-3 rounded-md font-semibold text-lg tracking-wider ml-auto hover:bg-green-200">
        <slot />
    </button>
</template>

<script lang='ts' setup>
import { defineComponent } from 'vue';

// const props = defineProps({

// })

defineComponent({
    name: 'ButtonComponent'
})
</script>

<style lang='scss' scoped></style>