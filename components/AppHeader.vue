<script setup>
const active = ref(false);
function menuClick() {
    active.value = !active.value;
}
</script>
<template>
    <header
        class="w-full h-12 flex justify-between items-center border border-b-[#1F2937] fixed top-0 left-0 px-8 py-4"
    >
        <span class="text-xl font-medium"> N </span>
        <nav class="flex gap-6 max-md:hidden">
            <a href="#hero-content">Home</a>
            <a href="#about-content">About</a>
            <a href="#project-content">Project</a>
            <NuxtLink to="#"> Curretly Exploring </NuxtLink>
        </nav>
        <div class="md:hidden">
            <span @click="menuClick">Menu</span>
            <MenuMobile :active="active" class="transition ease-out delay-300" @close-menu="menuClick" />
        </div>
    </header>
</template>
