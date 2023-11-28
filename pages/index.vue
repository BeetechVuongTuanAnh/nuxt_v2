<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                <div v-if="products" v-for="product in products" :key="product.id">
                    <ProductComponent :product="product" />
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';

const products = [
    {
        id: 1,
        title: "Title 1",
        description: "This is a description 1",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 10000
    },
    {
        id: 2,
        title: "Title 2",
        description: "This is a description 2",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 20000
    },
    {
        id: 3,
        title: "Title 3",
        description: "This is a description 3",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 30000
    },
    {
        id: 4,
        title: "Title 4",
        description: "This is a description 4",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 40000
    },
    {
        id: 5,
        title: "Title 5",
        description: "This is a description 5",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 50000
    },
    {
        id: 6,
        title: "Title 6",
        description: "This is a description 6",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 60000
    },
    {
        id: 7,
        title: "Title 7",
        description: "This is a description 7",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 70000
    },
    {
        id: 8,
        title: "Title 8",
        description: "This is a description 8",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 80000
    },
    {
        id: 9,
        title: "Title 9",
        description: "This is a description 9",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 90000
    },
    {
        id: 10,
        title: "Title 10",
        description: "This is a description 10",
        url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        price: 100000
    }
];
</script>

<style scoped></style>