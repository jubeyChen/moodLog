<template>
    <header class="text-red flex">
        <img src="@/assets/images/logo.png">

        <nav>
            <RouterLink class="hidden" :to="RoutingPath.Add">新增心情</RouterLink>
            <RouterLink :to="RoutingPath.Add">我的日曆</RouterLink>
        </nav>
    </header>
</template>

<script lang='ts' setup>
import { RouterLink, RouterView } from 'vue-router';
import { RoutingPath } from '@/consts/routingPath.const';
</script>

<style lang='scss' scoped>


</style>