<template>
    <div>
        <myHeader myTitle='我是购物车标题' @loginEvent='handleLogin'></myHeader>
        <h2>这是购物车</h2>
        <ul>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
        </ul>
        <myFooter></myFooter>
    </div>
</template>
<script>
import Demo06Footer from '@/components/Demo06Footer'
export default {
    methods:{
        handleLogin(msg){
            console.log('父组件接收到的数据是：',msg)
        }
    },
    components:{
        'myFooter':Demo06Footer
    }
}
</script>
<style scoped>

</style>
