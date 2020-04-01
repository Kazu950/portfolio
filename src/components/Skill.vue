<template>
    <div class="skill">
        <div v-for="skill in getSkill" :key="skill.title">
            <h2 class="skill__title">{{ skill.title }}</h2>
            <br>
            <div class="skill__wrapper">
                <div class="contents"  v-for="item in skill.skillItem" :key="item.item">
                    <span class="lavel" :style="{'border-left': item.lavel}"></span>
                    <p class="contents__item">{{ item.item }}</p>
                    <p class="contents__description">{{ item.comment }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(["getSkill"])
    }
}
</script>

<style lang="scss" scoped>
.skill {
    text-align: center;
    width: 80%;
    margin: auto;

    &__title {
        @include page-title;
    }
    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 4rem;
        margin-bottom: 4.5rem;
        word-break: break-all;
    }
    .contents {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.22);
        position: relative;
        margin-top: 5rem;

        .lavel {
            content: "";
            top: 0;
            left: 0;
            border-bottom: 4em solid transparent;
            position: absolute;
            z-index: 100;
        }

        &__item {
            font-size: 3.5rem;
            margin-top: 3rem;
        }
               
        &__description {
            font-size: 1.5rem;
            margin: 3rem;
        }
    }
    
}
</style>
