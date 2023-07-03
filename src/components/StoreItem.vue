<template>
    <div class="item" :class="{active:IsActive}">
        <div class="item-image">
            <img :src="Item.image" :width="240" :height="240" loading="lazy" >
        </div>
        <div class="item-content">
            <div class="item-title">
                <h5>{{ Item.title }}</h5>
            </div>
            <p>{{ Item.price }} $</p>
            <div class="item-button-list">
                <div v-if="!IsClick">
                    <div type="button" class="button-add" tabindex="0" @click="handleClick(Item)">
                        <span >
                            Добавить в корзину
                        </span>
                    </div>
                </div>
                <div v-else>
                    <div class="button-update-list">
                        <button class="button-update" @click="remove(Item)">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2-e9"><path fill="currentColor" d="M5 11a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"></path></svg>    
                            </span>
                        </button>
                        {{ StoreCount }}
                        <div >
                                <button class="button-update" @click="add(Item)">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2-e9"><path fill="currentColor" d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'StoreItem',
    emits:['increase','decrease','addItem','removeItem'],
    props:{
        Item:Object,
        totalCount:Number,
        SavedItems:Object
    },

    data(){
        return {
            StoreCount:0,
            IsActive:false,
            IsClick:false
        }
    },

    methods:{
        add(item){
            this.inc()
            this.$emit('addItem',item)
        },
        remove(item){
            this.dec()
            this.$emit('removeItem',item)
        },
        inc(){
            if (this.StoreCount==99){
                return
            }
            this.StoreCount+=1;
            this.$emit('increase')
        },
        dec(){
            this.StoreCount-=1;
            this.$emit('decrease')
            if (this.StoreCount == 0){
                this.IsActive = false;
                this.IsClick=false
            }
        },
        handleClick(item){
            this.StoreCount = 1;
            this.$emit('increase')
            this.$emit('addItem',item)
            this.IsClick = true;
            this.IsActive = true;
        }
    }
}
</script>
<style scoped>
button{
    all:unset;
    cursor: pointer;
}
.button-add{
    padding:4px;
    border-radius: 12px;
    background-color: #005bff;
    color:#fff;
    cursor:pointer;
}
.button-add:hover{
    background-color: #0059ffbd;
}
.button-update{
    background-color: rgba(0,150,255,.12);
    color:#0050e0;
    align-items: center;
    justify-content: center;
    display: flex;
}
.button-update:hover{
    background-color: rgba(0, 149, 255, 0.227);
}
.item{
    border: 1px solid grey;
    border-radius: 14px;
    margin-top:10px;
    margin-bottom: 10px;
    margin-right: 10px;
    align-items: stretch;
    justify-content: center;
    align-items: center;
    width:400px;
}
.item-content{
    margin-left:10px;
}
.active{
    border: 2px solid #10c44c;
}
.item-image{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.item-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    user-select: none;
}
.item-button-list{
    margin:4px;
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    user-select: none;
}
.button-update-list{
    margin:4px;
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    user-select: none;
}
</style>