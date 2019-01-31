<template>
    <div>
        <h2>
            待做事项列表
        </h2>
        <input type="text" v-model="myContent">
        <button @click="handleClick">add</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myContent:''
        }
    },
    methods:{
        handleClick(){
            this.$bus.$emit('addEvent',this.myContent)
            this.myContent=''
        }
    }
}
</script>
