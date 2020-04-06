<template>
    <div class="portfolio">
        <h2 class="portfolio__title">Portfolio</h2>
        <br>
        <div class="portfolio__wrapper">
            <div class="contents" v-for="(works, index) in getPortfolioElement" @click="showModal(index)" :key="index">
                <img class="contents__item" :src="works.image">
            </div>
        </div>
        <skillModal v-show="getModal">
        </skillModal>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import SkillModal from "./modal/SkillModal"
export default {
    computed: {
        ...mapGetters(["getPortfolioElement", "getModal"])
    },
    methods: {
        ...mapActions(["showModal"])
    },
    components: {
        SkillModal
    }
}
</script>

<style lang="scss" scoped>
.portfolio {
    text-align: center;
    width: 80%;
    margin: auto;

    &__title {
        @include page-title;
    }
    &__wrapper {
        width: 80%;
        margin: auto;
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 10rem;
        margin-bottom: 4.5rem;

        @include responsive-sp {
            grid-template-columns: 1fr;
        }
    }
    .contents {
        position: relative;

        &:hover::before {
            position: absolute;
            width: 100%;
            height: 100%;
            font-size: 5rem;
            color: white;
            content: "CLICK!";
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
        }
        &__item {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
