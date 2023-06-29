<template>
    <div class="container">
        <div class="item-list">
            <div v-for="item in res" :key="item.id" >
            <div class="item">
                    <img :src="item.image" :width="240" :height="240">
                    <div class="title">
                        <h5>{{ item.title }}</h5>
                    </div>
                    <p>{{ item.price }} $</p>
                    <div class="button-list">
                        <button>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'MainPage',
    data(){
        return {
            res:[]
        }
    },
    methods:{
        async getProducts(){
            this.res = await fetch('https://fakestoreapi.com/products?offset=0&limit=100').then(res=>res.json())
            console.log(this.res);
        }
    },
    mounted(){
        this.getProducts()
    }

}
</script>
<style scoped>
.container {
}
.item-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
}
.description{
}
.item{
    border: 1px solid grey;
    margin-top:10px;
    margin-bottom: 10px;
    margin-right: 10px;
    align-items: stretch;
    flex-direction: row;
    width:400px;
}
</style>