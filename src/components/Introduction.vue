<template>
    <div class="profile">
        <h2 class="profile__title">Profile</h2>
        <br>
        <img class="profile__image" :src="getImage">
        <div class="description">
            <table class="description__table">
                <tr v-for="item in getItem" :key="item.headline">
                    <th>{{ item.headline }}</th><td>{{ item.element }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: { ...mapGetters(["getItem", "getImage"]) }
}
</script>

<style lang="scss" scoped>
.profile {
    text-align: center;
    width: 80%;
    margin: auto;

    &__title {
        @include page-title;
    }
    &__image {
        border-radius: 50%;
        width: 30rem;
        height: 30rem;
        margin: 7% 0;
    }
    .description {
        margin: auto;

        &__table {
            margin: 0 auto;
            width: 80%;
            
            th {
                font-size: 3.5rem;
                padding: 5rem 0;
                width: 50%;
            }
            td {
                font-size: 2.6rem;
                width: 50%;
            }
            @include responsive-sp {
                th {
                    display: block;
                    font-size: 3.5rem;
                    margin: 0 auto;
                    width: 100%;
                }
                td {
                    display: block;
                    font-size: 2.6rem;
                    margin: 0 auto;
                    width: 100%;          
                }
            }
        }
    }
}
</style>
