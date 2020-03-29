<template>
    <div class="profile">
        <h2 class="profile__title">Profile</h2>
        <br>
        <img class="profile__image" :src="getImage">
        <div class="description">
            <table class="description__table">
                <tr  v-for="item in getItem" :key="item.id">
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
        display: inline-block;
        text-align: center;
        font-size: 5rem;
        margin: 2% 0;
        border-bottom: double 2px #383838;
        
    }
    &__image {
        border-radius: 50%;
        width: 30rem;
        height: 30rem;
        margin: 2.5% auto;
    }
    .description {

        &__table {
            margin: auto;
            width: 100%;
            
            th {
                font-size: 3.5rem;
                padding: 15px 0;
                width: 50%;
            }
            td {
                font-size: 3rem;
                padding: 15px 0;
                width: 50%;
            }
        }
    }
}
</style>
