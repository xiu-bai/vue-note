<script setup>
// defineProps({
//     modelValue: String
// })
// const emit = defineEmits(['update:modelValue'])

const modelValue = defineModel()
</script>

<template>
    <div>
        <input type="text" :value="modelValue" @input="e => modelValue = e.target.value">
    </div>
</template>



