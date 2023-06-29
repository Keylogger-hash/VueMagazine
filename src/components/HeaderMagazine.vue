<template>
    <div class="header">
        <div class="header-content">
            Header
            <div class="logo-cart">
                <p>{{ storeCount }}</p>
                <img :src="image" width="20" height="20">
            </div>
        </div>
    </div>
</template>
<script>
import cart from '../assets/cart.svg'
export default {
    name:'HeaderMagazine',
    data(){
        return {
            image: cart,
            storeCount:0,
        }
    } 
}
</script>
<style scoped>
.header{
    background-color: #fff;
    display: block;
    width:100%;
    height: 100%;
}
.header-content{
    display: flex;
    flex-direction: row;
    margin: 0 auto; width: 960px;
}

.logo-cart:hover{
    color:#0050e0;
}
</style>