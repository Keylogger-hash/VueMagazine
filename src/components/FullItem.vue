<template>
    <div class="detail-modal" :class="{'detail-modal-open':IsOpenDetailModal}">
        <div class="detail-modal-content">
            <div class="close-button">
                <div @click="closeDetailModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2-e9" style="color: rgb(0, 26, 52);">\
                        <path fill="currentColor" d="m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.705a1 1 0 1 1 1.414-1.414L12 10.586Z"></path>
                    </svg>
                </div>
            </div>
            <h1>Полное описание товара</h1>
            <h5>Название</h5>
            <p>{{ Item.title }}</p>
            <img :src="Item.image" loading="lazy" class="img">
            <h5>Описание:</h5>
            <p>{{ Item.description }}</p>
            <h5>Цена: {{ Item.price }}</h5>
        </div>
    </div>
</template>
<script>
import {getApiProduct} from '../api/main'
export default{
    name:'FullItem',
    props:{
        Id:Number,
        IsOpenDetailModal:Boolean
    },
    emits:['closeDetailModal'],
    data(){
        return {
            Item:Object
        }
    },
    methods:{
        async getProduct(){
            let data = await getApiProduct(this.Id);
            console.log(data)
            this.Item = data;
        },
        closeDetailModal(){
            this.$emit('closeDetailModal')
        }
    },
    mounted(){
        this.getProduct()
    }
}
</script>
<style scoped>
.detail-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;

}
.detail-modal-content{
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    height:90%;
    width:50%;
    display: flex;
    flex-direction: column;
}
.detail-modal-open{
    opacity: 1;
    visibility: visible;
}
.img{
    width: 100%;
    height: 100%;
    max-height:360px;
    max-width: 720px;

}
.close-button{
    margin-right:0;
    margin-left:auto;
    display: flex;
    flex-direction: row;
}
@media screen and (max-width:964px){
    .detail-modal-content{
        background-color: white;
        padding: 20px;
        border-radius: 4px;
        height:90%;
        width:90%;
        display: flex;
        flex-direction: column;

    }
}
</style>