<template>
    <div class="header">
        <ul class="header__list">
            <li class="header__item" v-for="item in headerItem" :key="item.id">
                <router-link :to="item.url" active-class="header__item--active" exact>{{ item.item }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: { ...mapGetters(["headerItem"]) }
}
</script>

<style lang="scss" scoped>
.header {
    font-size: 3.5em;
    width: 80%;
    margin: 2% auto;
    
    &__list {
        @include flex-around;
    }
    &__item {
        &--active {
            color: #009bf9;
        }
    }
}
</style>