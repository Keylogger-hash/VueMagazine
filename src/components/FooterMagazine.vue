<template>
    <div class="footer">
        © {{currentYear}} FakeStore
    </div>
</template>
<script>
export default {
    name:'FooterMagazine',
    computed:{
        currentYear(){
            const date = new Date().getFullYear();
            return date
        }
        
    }
}
</script>
<style scoped>
.footer{
    margin-top:40px;
    border-top:1px solid grey;
    background-color: #f2f5f9;
    height:100%;
    width:100%;
}
</style>