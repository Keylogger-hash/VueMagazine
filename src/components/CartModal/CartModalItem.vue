<template>
    <div class="cart-modal-item">
        <p>{{ Title }}</p>
        <img :src="ImageUrl" width="40" height="40">
        <p>{{ Price }} x {{ Count }}</p>
    </div>
</template>
<script>

export default{
    name:'CartModalItem',
    props:{
        Title:String,
        Price: Number,
        ImageUrl: String,
        Count: Number
    },
}
</script>
<style scoped>
.cart-modal-item{
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    border-radius: 12px;
    padding:4px;
    margin:12px;
}
</style>