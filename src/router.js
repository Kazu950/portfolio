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
            path: "/",
            components: {
                default: Home,
                header: Header
            }
        },
        {
            path: "/introduction",
            components: {
                default: Introduction,
                header: Header
            }
        },
        {
            path: "/skill",
            components: {
                default: Skill,
                header: Header
            }
        },
        {
            path: "/portfolio",
            components: {
                default: Portfolio,
                header: Header
            }
        }
    ]
})