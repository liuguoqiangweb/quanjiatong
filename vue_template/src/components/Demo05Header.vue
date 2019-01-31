<template>
    <div>
        <h2>{{myTitle}}</h2>
        <button @click="handleClick">操作登录</button>
        <button @click="handleClose">关闭Footer</button>
    </div>
</template>
<script>
export default {
    props:['myTitle'],
    methods:{
        handleClick(){
            //触发loginEvent，并且传值
            this.$emit('loginEvent',true)
        },
        handleClose(){
            // 借助于bus传值给兄弟组件：footer
            this.$bus.$emit('footerEvent',true)
        }
    }
}
</script>
<style scoped>

</style>
