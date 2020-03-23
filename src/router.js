import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./components/Home.vue"
import Introduction from "./components/Introduction.vue"
import Portfolio from "./components/Portfolio.vue"
import Skill from "./components/Skill.vue"
import Header from "./components/Header.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            component: Home
        },
        {
            path: "/introduction",
            component: Introduction
        },
        {
            path: "/skill",
            component: Skill
        },
        {
            path: "/portfolio",
            component: Portfolio
        },
        {
            path: "/header",
            component: Header
        }
    ]
})