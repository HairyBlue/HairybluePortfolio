<script setup>
const ismobile = ref(true);
defineProps({
    active: Boolean,
});
const emit = defineEmits(['closeMenu']);
function closeMenu() {
    emit('closeMenu');
}
</script>
<template>
    <div
        :class="active && ismobile ? 'block' : 'hidden'"
        class="flex flex-col text-center fixed right-0 top-0 z-10 h-screen w-1/2 max-sm:w-full p-6 font-medium text-4xl bg-slate-400"
    >
        <a href="#hero-content" class="mt-10" @click="closeMenu">Home</a>
        <a href="#about-content" class="mt-10" @click="closeMenu">About</a>
        <a href="#project-content" class="mt-10" @click="closeMenu">Project</a>
        <NuxtLink to="#" class="mt-10"> Curretly Exploring </NuxtLink>
    </div>
</template>
