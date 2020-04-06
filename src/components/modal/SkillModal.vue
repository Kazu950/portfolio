<template>
    <div class="modal" @click="closeModal">
        <div class="modal__contents">
            <div class="element">
                <span class="element__close" @click="closeModal">×</span>
                <img class="element__image" :src="getPortfolio.image">
                <p class="element__title">{{ getPortfolio.title }}</p>
                <p class="element__comment">{{ getPortfolio.comment }}</p>
                <ul class="element__list">
                    <li class="element__tag" v-for="tag in getPortfolio.tag" :key="tag">{{ tag }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex" 
export default {
    computed: {
        ...mapGetters(["getPortfolio"])
    },
    methods: {
        ...mapActions(["closeModal"]),
    },
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);

    
    &__contents {
        width: 60rem;
        height: 60rem;
        margin: 10rem auto;
        background-color: whitesmoke;
        position: relative;

        .element {
            width: 90%;
            height: 100%;
            margin: auto;
            overflow: scroll;

            &__close {
                font-size: 4rem;
                position: absolute;
                top: -1rem;
                left: 57.5rem;
            }
            &__image {
                width: 100%;
                height: 58%;
                margin-top: 3.5rem
            }   
            &__title {
                font-size: 3.5rem;
                margin: 1.5rem 0;
            }
            &__comment {
                font-size: 2rem;
            }
            &__list {
                @include flex-around;
                font-size: 2rem;
                padding: 1.5rem 0;
            }
            &__tag {
                padding: 0 0.8rem;
                overflow: scroll;
                background-color: $color;
                border: 1px solid $color;
                border-radius: 1rem;
            }
        }
    }
}
</style>