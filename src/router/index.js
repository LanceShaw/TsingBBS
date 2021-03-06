import Vue from 'vue'
import Router from 'vue-router'
import MainComp from '../components/main.vue'
import HotPosts from '../components/hotposts.vue'
import SinglePost from '../components/singlepost.vue'
import MyPosts from '../components/myPosts.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/main',
            component : MainComp,
            alias: '/'
        },
        {
            path: '/hotPosts',
            component: HotPosts,
        },
        {
            path:'/allPosts/:postid',
            component: SinglePost,
        },
        {
            path:'/myPosts',
            component:MyPosts
        }
    ]
})
