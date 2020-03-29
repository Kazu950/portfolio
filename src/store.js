import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const header = {
    state: {
        item: [
            {
                id: 1,
                item: "Home",
                url: "/"
            },
            {
                id: 2,
                item: "Introduction",
                url: "/introduction"
            },
            {
                id: 3,
                item: "Skill",
                url: "/skill"
            },
            {
                id: 4,
                item: "Portfolio",
                url: "/portfolio"
            }
        ]
    },
    getters: {
        headerItem(state) { return state.item }
    }
}

const introduction = {
    state: {
        introductionItem: [
            {
                id: 1,
                headline: "Name",
                element: "Kazu"
            },
            {
                id: 2,
                headline: "Age",
                element: 21
            },
            {
                id: 3,
                headline: "University",
                element: "某私立大学"
            },
            {
                id: 4,
                headline: "Hobby",
                element: "運動"
            },
            {
                id: 5,
                headline: "Comment",
                element: "プログラミングを学び始めたばかりのひよっこです。温かい目で見守っていただけると幸いです。"
            }
        ],
        profileImage: "/introduction/Introduction.JPG"
    },
    getters: {
        getItem(state) { return state.introductionItem },
        getImage(state) { return state.profileImage }
    }
}

export default new Vuex.Store({
    modules: {
        header,
        introduction
    }
})