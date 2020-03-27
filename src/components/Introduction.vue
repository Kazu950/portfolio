<template>
    <div class="profile">
        <h2 class="profile__title">Introduction</h2>
        <img class="profile__image" src="/introduction/Introduction.JPG">
        <div class="description">
            <p class="description__item"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profile {
    text-align: center;

    &__title {
        text-align: center;
        font-size: 4.2rem;
        margin: 2% 0;
    }
    &__image {
        border-radius: 50%;
        width: 40rem;
        height: 40rem;
    }
    .description {


        &__item {
            
        }
    }
}
</style>
