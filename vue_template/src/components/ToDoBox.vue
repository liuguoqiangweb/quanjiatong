<template>
    <div>
        <todoinput></todoinput>
        <todolist></todolist>
    </div>
</template>
<script>
import ToDoInput from '@/components/ToDoInput'
import ToDoList from '@/components/ToDoList'
export default {
    components:{
        'todoinput':ToDoInput,
        'todolist':ToDoList
    }
}
</script>
<style scoped>

</style>
