<template>
    <transition>
        <div class="home">
            <h1>Welcome to my portfolio</h1>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.home {
    text-align: center;
    height: 100%;
    padding-top: 16%;
    font-size: 4.8rem;

    @include responsive-sp {
    font-size: 2.8rem;
    }
}
</style>
