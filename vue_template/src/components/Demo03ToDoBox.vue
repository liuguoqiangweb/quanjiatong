<template>
    <div>
        <input type="text" v-model="task">
        <button @click="handleClick">
            添加
        </button>
        <ul>
            <li v-for="(item,index) in list" :key='index'>{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            task:''
        }
    },
    created(){
        this.list[0]=this.$route.params.task
    },
    methods:{
        handleClick(){
            if(this.task.trim().length==0){
                return;
            }
            this.list.push(this.task)
            this.task=''
        }
    }
}
</script>
<style scoped>

</style>
