<template>
    <div class="modal" :class="{'modal-open':isModalOpen}">
        <div>
            <button @click="closeModal">Close</button>
        </div>
        <div class="modal-content">
            <div v-if="savedItems.items">
                <div v-for="(item) in savedItems" :key="item">
                    <div>
                        {{ item.id }}
                    </div>
                    
                </div>
            </div>
            <div v-else>
                <div>
                    В корзине пусто
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'CartModal',
    emits:['closeModal'],
    props:{
        isModalOpen:Boolean,
        savedItems:Object
    }, 
    mounted(){
        this.alert()
    },
    methods:{
        closeModal(){
            this.$emit('closeModal')
        },
        alert(){
            console.log('Mounted')
            console.log(this.savedItems.items)
            console.log(this.savedItems)
        }
    }  
}
</script>
<style scoped>
.modal{
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
.modal-open{
    opacity: 1;
    visibility: visible;
}
.modal-content{
    background-color: white;
    padding: 20px;
    border-radius: 4px;

}
</style>