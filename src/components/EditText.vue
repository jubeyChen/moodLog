<template>
    <div v-if="editor" class="text-btn">
        <button :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'bg-sunshine rounded-sm py': editor.isActive('bold') }" class="mr-2 p-2"
            @click.prevent="editor.chain().focus().toggleBold().run()">
            <img src="@/assets/images/icon_bold.svg">
        </button>

        <button :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'bg-sunshine rounded-sm py': editor.isActive('italic') }"
            class="p-2"
            @click.prevent="editor.chain().focus().toggleItalic().run()">
            <img src="@/assets/images/icon_italic.svg">
        </button>
    </div>

    <EditorContent :editor="editor" />
</template>



<script setup lang='ts'>
import { EditorContent, Editor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { defineComponent, nextTick, onMounted, ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: `<p>請輸入投保規則</p>`
    }
});

const emits = defineEmits(['update:modelValue']);


const editor = ref();

onMounted(() => {
    nextTick(() => {
        editor.value = new Editor({
            content: props.modelValue,
            onUpdate: ({ editor }) => {
                emits('update:modelValue', editor.getHTML());
            },
            extensions: [StarterKit],
            editorProps: {
                attributes: {
                    class: 'text-area',
                }
            }
        });
    });

});

defineComponent({
    name: 'EditTextComponent'
})
</script>

<style lang="scss">
.text-btn {
    display: flex;
    align-items: center;
    padding: 10px 8px;
    border: 2px solid theme('colors.warm.200');
    border-radius: 8px 8px 0 0;
    background-color: white;
}

.text-area {
    padding: 12px;
    border: 2px solid theme('colors.warm.200');
    border-radius: 0 0 8px 8px;
    border-top-color: transparent;
    color: theme('colors.grey.200');
    background-color: white;
    height: 250px;
    font-size: 18px;
    max-height: 250px;
    overflow-y: auto;

    &:focus {
        outline: 0;
    }

    &::-webkit-scrollbar {
        width: 4px;
        padding: 0 5px;
        background-color: transparent;
        border-radius: 0 0 6px 0;
    }

    &::-webkit-scrollbar-thumb {
        border: 2px solid bluw;
        background: theme('colors.warm.200');
        border-radius: 20px 10px 22px 20px;
    }
}
</style>