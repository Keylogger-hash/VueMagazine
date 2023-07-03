<template>
    <div class="header">
        <div class="header-content">
            <div class="header-title">
                <h1>
                    FakeStore
                </h1>
            </div>
            <div class="logo-cart">
                <div class="order-button" role="button" :class="getActiveOrderButton" @click="openModal">
                    <span>
                        Заказать
                    </span>
                </div>
                <div class="total-count">
                    {{ totalCount }}
                </div>
                <a class="svg-cart">
                    <svg  width="36" height="36"  xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M6 6a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2h4a1 1 0 0 1 .986 1.164l-1.582 9.494A4 4 0 0 1 17.46 22H6.54a4 4 0 0 1-3.945-3.342L1.014 9.164A1 1 0 0 1 2 8h4V6Zm2 2h5a1 1 0 1 1 0 2H3.18l1.389 8.329A2 2 0 0 0 6.54 20h10.92a2 2 0 0 0 1.972-1.671L20.82 10H17a1 1 0 0 1-1-1V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2Z"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    <CartModal :isModalOpen="isModalOpen" :savedItems="savedItems" @closeModal="closeModal"></CartModal>
</template>

<script>
import cart from '../assets/cart.svg'
import CartModal from './CartModal/CartModal.vue';
export default {
    name: "HeaderMagazine",
    props: {
        totalCount: Number,
        savedItems: Object
    },
    data() {
        return {
            image: cart,
            isModalOpen:false,
            isOrderButtonActive: true,
            activeOrderButtonClass: "active",
            errorOrderButtonClass: "non-active"
        };
    },
    methods:{
        openModal(){
            console.log('Open modal')
            this.isModalOpen = true;
        },
        closeModal(){
            console.log('Close modal')
            this.isModalOpen = false;
        }
    },
    computed: {
        getActiveOrderButton() {
            return {
                active: this.totalCount > 0,
                "non-active": this.totalCount === 0
            };
        }
    },
    emits: [
        "increase",
        "decrease",
        "openModal",
        "closeModal"
    ],
    components: { CartModal }
}
</script>
<style scoped>

.header{
    background-color: #fff;
    border: 1px solid rgba(204,214,228,.6);
    position: fixed;  
    top:0;
    padding-top:4px;
    padding-bottom:4px;  
    width: 100%;
}
.header-title{
    margin-left:16px;
    
}
.header-content{
    display: flex;
    flex-direction: row;
}
.logo-cart{
    display: flex;
    flex-direction: row;
    margin-right:31px;
    margin-left:auto;
    margin-top:3px;

}
.svg path{
    fill:inherit;
    stroke:inherit;
    stroke-width:inherit;
}
.svg-cart{
    transition: all .5s ease;
}
/* .svg-cart:hover{
    color: #0050e0;    
} */
.total-count{
    border:1px solid red;
    background-color: red;   
    align-items: center;
    display: flex;
    justify-content: center; 
    width: 20px;
    height:20px;
    border-radius: 50%;
    color:#fff;
}
.active{
    background-color: #10c44c;
    cursor: pointer;
}
.non-active{
    background-color: #adb5bd;
    cursor:none;
}
.order-button{
    border-radius: 12px;
    padding:4px;
    margin-right:10px;
    color: #fff;
    height:20px;
    user-select: none;
}
.active:hover{
    background-color: #0ba23e;

}
</style>