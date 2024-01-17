<script setup>
const works = useWorks();
</script>

<template>
    <section id="project-content">
        <!-- FLEX -->
        <div class="flex w-full gap-8">
            <div class="grid grid-cols-2 gap-8 w-3/4">
                <div v-for="(work, index) in works" :key="index">
                    <div class="borde border-2 border-slate-500 bg-white">
                        {{ work.name }}
                    </div>
                </div>
            </div>

            <div class="w-1/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio quas qui perferendis a nulla
                illum eveniet esse totam unde, minus magni adipisci eius quisquam aliquid voluptas beatae minima ut.
                Voluptas, odio iste autem rem aliquam libero eaque pariatur, architecto mollitia deserunt id? Earum
                dolorum, suscipit consectetur doloremque accusamus ab? Nostrum id quia vel alias sint magni maxime
                consequatur aliquid.
            </div>
        </div>
        <!-- GRID -->
    </section>
</template>
