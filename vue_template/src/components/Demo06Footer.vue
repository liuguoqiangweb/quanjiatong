<template>
    <div>
        <h3>这是页脚</h3>
    </div>
</template>
<script>
export default {
    mounted(){
        // 借助于bus来完成时间的绑定，在时间处理函数中接受通过bus传来的数据
        this.$bus.$on('footerEvent',(msg)=>{
            console.log('页脚组件收到的值：',msg)
        })
    }
}
</script>
