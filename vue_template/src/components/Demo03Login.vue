<template>
    <div>
        <button @click="jump">clickMe</button>
    </div>
</template>
<script>
export default {
    methods:{
        jump(){
            this.$router.push('/demo03todobox/吃饭')
        }
    }
}
</script>
<style scoped>

</style>
