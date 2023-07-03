<template>
    <div class="container">
        <div v-if="!loading">
            <div class="load-container">
                <img :src="loadImage" width="60" height="60">
                <p>Подождите товары загружаются...</p>
            </div>
        </div>
        <div v-else>
            <div class="item-list">
                <div v-for="item in res" :key="item.id" >
                    <StoreItem 
                        :Item="item" 
                        :SavedItems="savedItems"
                        @addItem="addItem" 
                        @removeItem="removeItem" 
                        @increase="increase" 
                        @decrease="decrease">
                    </StoreItem>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import StoreItem from './StoreItem.vue';
import {getApiProducts} from '../api/main';
import rocket from '../assets/rocket.gif';
export default{
    name:'MainPage',
    props:{
        totalCount:Number,
        savedItems: Object
    },
    emits:['increase','decrease','addItem','removeItem'],
    components: {
        StoreItem
    },
    data(){
        return {
            res:[],
            loading:false,
            loadImage: rocket
        }
    },
    methods:{
        async getProducts(){
            this.res = await getApiProducts()

            this.loading=true
            console.log(this.res);
        },
        addItem(item){
            this.$emit('addItem',item)
        },
        removeItem(item){
            this.$emit('removeItem',item)
        },
        increase(){
            this.$emit('increase')
        },
        decrease(){
            this.$emit('decrease')
        }
    },
    mounted(){
        this.getProducts()
    }

}
</script>
<style scoped>
.container {
    padding-top:40px;
    margin-top:16px;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
}
.item-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:100%;
    justify-content: center;
    align-items: center;
}
.load-container{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100vh;
    align-items: center;
    justify-content: center;
}
</style>