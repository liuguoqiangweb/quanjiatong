<template>
    <li>
        <button @click="handleClick">delete</button>
        <span>{{myValue}}</span>
    </li>
</template>
<script>
export default {
    props:['myValue','myIndex'],
    methods:{
        handleClick(){
            // 在此方法内，触发deleteEvent,并且把下标传过去
            this.$emit('deleteEvent',this.myIndex)
        }
    }
}
</script>
