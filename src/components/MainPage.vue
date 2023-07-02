<template>
    <div class="container">
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
</template>
<script>
import StoreItem from './StoreItem.vue';
import getApiProducts from '../api/main';
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
            
        }
    },
    methods:{
        async getProducts(){
            this.res = await getApiProducts()
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
}
.item-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top:16px;
}
</style>