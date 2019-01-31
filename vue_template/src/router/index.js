import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo01 from '@/components/Demo01'
import Demo02 from '@/components/Demo02'
import Demo03Login from '@/components/Demo03Login'
import Demo03ToDoBox from '@/components/Demo03ToDoBox'
import Demo04 from '@/components/demo04'
import Demo05 from '@/components/Demo05Header'
import todobox from '@/components/ToDoBox'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'HelloWorld',
            component: HelloWorld
        }, {
            path: '/demo01',
            component: Demo01
        }, {
            path: '/demo02/:name',
            component: Demo02
        }, {
            path: '/demo03login',
            component: Demo03Login
        }, {
            path: '/demo03todobox/:task',
            component: Demo03ToDoBox
        }, {
            path: '/demo04',
            component: Demo04
        }, {
            path: '/demo05',
            component: Demo05
        }, {
            path: '/todobox',
            component: todobox
        }
    ]
})
