import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const header = {
    state: {
        item: [
            {
                item: "Home",
                url: "/"
            },
            {
                item: "Introduction",
                url: "/introduction"
            },
            {
                item: "Skill",
                url: "/skill"
            },
            {
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
                headline: "Name",
                element: "Kazu"
            },
            {
                headline: "Age",
                element: 21
            },
            {
                headline: "University",
                element: "某私立大学"
            },
            {
                headline: "Hobby",
                element: "運動"
            },
            {
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

const skill = {
    state: {
        skill: [
            {
                title: "Language",
                skillItem: [
                    {
                        item: "Ruby",
                        lavel: "4em solid #ff1717",
                        comment: "独学で最初に学習した言語です。現在バックエンド側の学習に取り組んでいるためRailsと並行して学習を進めています。"
                    },
                    {
                        item: "JavaScript",
                        lavel: "4em solid #fffb00",
                        comment: "Vueを使用したポートフォリオを作成するために学習しました。"
                    },
                    {
                        item: "HTML&CSS",
                        lavel: "4em solid #ff700a",
                        comment: "個人での開発や大学の授業での使用など多くの場面で活用しています。"
                    }
                ]
            },
            {
                title: "Framework",
                skillItem: [
                    {
                        item: "Ruby on Rails",
                        lavel: "4em solid #ff3636",
                        comment: "過去にCRUD機能と検索機能のついたTodoリストを作成したことがあります。現在、Rubyと並行して学習を進めています。"

                    },
                    {
                        item: "Vue.js",
                        lavel: "4em solid #1dc476",
                        comment: "SPAに興味をもち今年から学習を始めました。Vueのアウトプットのためにこのポートフォリオサイトを作成しました。"

                    }
                ]
            },
            {
                title: "Other",
                skillItem: [
                    {
                        item: "Git",
                        lavel: "4em solid #525956",
                        comment: "インターンや個人開発、大学の授業でも使用しています。"
                    },
                    {
                        item: "Sass",
                        lavel: "4em solid #e612c2",
                        comment: "このサイトの開発をする際に学習しました。今後作成するアプリケーションでも使用していき、理解を深めていきたいと考えています。"
                    }
                ]
            }
        ]
    },
    getters: {
        getSkill(state){ return state.skill }
    }
}

const portfolio = {
    nameSpaced: true,
    state: {
        portfolioElement: [
            {
                title: "飲食店検索アプリ",
                image: "/portfolio/restaurantSearch.png",
                comment: "JavaScriptのアウトプットをかねて「ぐるなびAPI」を使用し、自分の近くにある飲食店を検索することができるアプリを作成しました。",
                tag: [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
            },
            {
                title: "チャットアプリ",
                image: "/portfolio/noImage.jpeg",
                comment: "インターンシップで作成したチャットアプリです。",
                tag: [
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "JavaScript",
                    "Node.js"
                ],
            },
            {
                title: "ポートフォリオサイト",
                image: "/portfolio/portfolio.png",
                comment: "SPAの学習のため自己紹介サイトを作成しました。",
                tag: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Vue.js",
                    "Sass"
                ],
            },
            {
                title: "Todoリスト",
                image: "/portfolio/todo.png",
                comment: "CRUD機能＋タスク検索機能付きTodoリストを作成しました。",
                tag: [
                    "HTML",
                    "CSS",
                    "Ruby",
                    "Ruby on Rails",
                    "Bootstrap"
                ],
            }
        ],
        isShow: false
    },
    getters: {
        getPortfolioElement(state){ return state.portfolioElement },
        getModal(state){ return state.isShow }
    },
    mutations: {
        openModal(state) {
            state.isShow = true
        },
        closeModal(state) {
            state.isShow = false
        }
    },
    actions: {
        showModal ({ state, commit }, id) {
            commit('openModal')
            commit('setPortfolio', state.portfolioElement[id])
          }
    }
}

const modal = {
    nameSpaced: true,
    state: {
        portfolio: {
            title: "",
            image: "",
            comment: "",
            tag: ""
        }
    },
    getters: {
        getPortfolio(state){ return state.portfolio }
    },
    mutations: {
        setPortfolio(state, info) {
            state.portfolio.title = info.title
            state.portfolio.image = info.image
            state.portfolio.comment = info.comment
            state.portfolio.tag = info.tag
        }
    },
    actions: {
        closeModal({ commit }) {
            commit("closeModal")
        }
    }
}

export default new Vuex.Store({
    modules: {
        header,
        introduction,
        skill,
        portfolio,
        modal
    }
})