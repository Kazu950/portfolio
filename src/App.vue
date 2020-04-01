<template>
  <div id="app">
    <router-view name="header"></router-view>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s; 
}
</style>
