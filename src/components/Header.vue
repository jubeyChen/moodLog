<template>
    <header class="bg-white h-[85px] px-2 pr-3 pt-2 pb-1">
        <div class="flex justify-between items-center max-w-[1280px] mx-auto">
        <div class="w-[75px] h-[75px]">
        <img class="w-full h-full object-contain" src="@/assets/images/logo.png">
        </div>

        <nav class="text-xl text-warm-200 font-bold">
            <RouterLink :to="RoutingPath.Add" class="mr-4">新增心情</RouterLink>
            <RouterLink :to="RoutingPath.Home">MoodLog</RouterLink>
        </nav>
        </div>
    </header>
</template>

<script lang='ts' setup>
import { RouterLink, RouterView } from 'vue-router';
import { RoutingPath } from '@/consts/routingPath.const';
</script>

<style lang='scss' scoped>
header{
    box-shadow: 5px 2px 6px 3px rgba(#000, 0.1);
    position: fixed;
    width: 100%;
    top: 0;

    a{
        &:hover{
            color: theme('colors.green.200');
        }
    }
}
</style>