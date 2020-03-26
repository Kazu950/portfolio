<template>
    <div class="header">
        <ul class="header__list">
            <li class="header__item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="header__item">
                <router-link to="/introduction">Introduction</router-link>
            </li>
            <li class="header__item">
                <router-link to="/skill">Skill</router-link>
            </li>
            <li class="header__item">
                <router-link to="/portfolio">Portfolio</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.header {
    // align-items: center;
    font-size: 45px;
    width: 80%;
    margin: 2% auto;
    
    &__list {
        @include flex-around;
    }

    &__item {
        
    }
}
</style>