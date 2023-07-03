<template>
    <div class="success-modal">
        <div class="success-modal-content">
            Ваш заказ успешно оформлен! Ждем вас еще
        </div>
    </div>
</template>
<script>
export default{
    name:'SuccessModal',
    props:{isOpen:Boolean},

}
</script>
<style scoped>
.success-modal{
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
.success-modal-content{
    background-color: rgba(255, 255, 255, 0);
    padding: 20px;
    border-radius: 12px;
    height:90%;
    width:50%;
    display: flex;
    flex-direction: column;
}
</style>