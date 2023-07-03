<template>
    <div class="modal" :class="{'modal-open':isModalOpen}">
        <div class="modal-content">
            <div class="close-button">
                <div @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="a2-e9" style="color: rgb(0, 26, 52);">\
                        <path fill="currentColor" d="m12 10.586 6.293-6.295a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.294a1 1 0 1 1-1.414 1.415L12 13.414 5.707 19.71a1 1 0 0 1-1.414-1.415L10.586 12 4.293 5.705a1 1 0 1 1 1.414-1.414L12 10.586Z"></path>
                    </svg>
                </div>
            </div>
            <div>
                <h1>
                    Мои товары:
                </h1>
            </div>
            <div v-if="isEmpty">
                <div>
                    В корзине пусто
                </div>
            </div>
            <div v-else>
                <div class="cart-box">
                    <div class="cart-box-content">
                        <div v-for="item in savedItems['items']" :key="item.id">
                            <CartModalItem 
                                :Title="item['item']['title']" 
                                :Price="item['item']['price']"    
                                :ImageUrl="item['item']['image']"
                                :Count="item['count']"
                            >
                            </CartModalItem>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                Сумма: {{ totalSum }}
            </div>
            <div class="order-button">
                <span>
                    Оформить заказ
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import CartModalItem from './CartModalItem.vue';
export default{
    name: "CartModal",
    emits: ["closeModal"],
    props: {
        isModalOpen: Boolean,
        savedItems: Object
    },
    components: { CartModalItem, },
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
        openSuccessModal(){

        }
    },
    computed: {
        totalSum() {
            let sum = 0;
            console.log(this.savedItems.items);
            for (const key in this.savedItems["items"]) {
                let price = this.savedItems["items"][key]["item"].price;
                let count = this.savedItems["items"][key]["count"];
                sum += price * count;
            }
            return sum;
        },
        isEmpty() {
            const length = Object.keys(this.savedItems["items"]).length;
            const isEmpty = length === 0 ? true : false;
            return isEmpty;
        },
    },
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
.close-button{
    margin-right:0;
    margin-left:auto;
    display: flex;
    flex-direction: row;
}
.modal-open{
    opacity: 1;
    visibility: visible;
}
.modal-content{
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    height:90%;
    width:50%;
    display: flex;
    flex-direction: column;
}
.cart-box{
    height:500px;
    border-radius: 12px;
    border: 1px solid red;
    padding:6px;
    display: flex;
}
.cart-box-content{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.order-button{
    padding:10px;
    border-radius: 12px;
    background-color: #005bff;
    color:#fff;
    cursor:pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.order-button:hover{
    background-color: #0059ffc7;
}
.order-button span{
    user-select: none;
}
@media screen and (max-width:964px){
    .modal-content{
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