<template>
    <div>
        <button @click="jump">跳转到Demo02</button>
        <a :href="myUrl">test</a>
        <input type="text" v-model="uname">
        <p>{{uname}}</p>
        <h1>这是Demo01组件</h1>
        <p>{{count}}</p>
        <button @click="modifyList">clickMe</button>
        <ul>
            <li v-for='(tmp,index) in list' :key='index'>
                {{tmp}}
                <h2>{{getCount}}</h2>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:1,
            list:[],
            myUrl:'http://www.baidu.com/',
            uname:'john'
        }
    },
    methods:{
        modifyCount(){
            this.count++
        },
        modifyList(){
            this.list.push(Math.random())
        },
        jump(){
            this.$router.push('/demo02/123')
        }
    },
    watch:{
        'count':function(){
            console.log(this.count)
        }
    },
    computed:{
        //计算属性：有依赖缓存的，如果依赖的数据没有变化，计算属性对应的方法是不会被调用的
        getCount(){
            console.log('计算属性对应的方法被调用了')
            return this.count
        }
    }
}
</script>
<style>

</style>
