<script setup>
const { setSeoMeta, setMeta } = useMeta();
useSeoMeta(setSeoMeta);
useHead(setMeta);
</script>

<template>
    <NuxtLayout>
        <main class="w-3/4 max-[460px]:w-[90%] m-auto">
            <HeroContent />
            <ProjectContent />
        </main>
    </NuxtLayout>
</template>
