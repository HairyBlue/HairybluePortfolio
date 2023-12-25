<script setup>
onMounted(() => {
    console.log(
        '%c Hello there 🤗, thanks for visiting my website.',
        'color: #1F2937;background:#D6D3D1;padding:8px;border-radius: 4px;'
    );
});
</script>
<template>
    <NuxtLoadingIndicator />
    <NuxtPage />
</template>
