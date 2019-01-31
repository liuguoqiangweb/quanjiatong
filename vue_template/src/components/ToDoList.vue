<template>
    <ul>
        <todoitem @deleteEvent='handleDelete' :myIndex='index' :myValue='tmp' v-for='(tmp,index) in list' :key='index'></todoitem>
    </ul>
</template>
<script>
import ToDoItem from '@/components/ToDoItem'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        this.$bus.$on('addEvent',(msg)=>{
            this.list.push(msg)
        })
    },
    methods:{
        handleDelete(index){
            this.list.splice(index,1)
        }
    },
    components:{
        'todoitem':ToDoItem
    }
}
</script>
