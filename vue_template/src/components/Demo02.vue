<template>
    <div>这是Demo02</div>
</template>
<script>
export default {
    data(){
        return {
            name:this.$route.params.name
        }
    },
    mounted(){
        console.log('Demo02组件挂载完毕')
        console.log(this.name)
    }
}
</script>
<style>

</style>
