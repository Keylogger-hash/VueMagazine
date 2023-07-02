<template>
  <HeaderMagazine 
    :totalCount="totalCount"
    :savedItems="savedItems"
    @increase="handleIncrease" 
    @decrease="handleDecrease">
  </HeaderMagazine>
  <MainPage 
    :totalCount="totalCount" 
    :savedItems="savedItems" 
    @addItem="addItem"
    @removeItem="removeItem"
    @increase="handleIncrease" 
    @decrease="handleDecrease">
  </MainPage>
  <FooterMagazine></FooterMagazine>
</template>

<script>
import HeaderMagazine from './components/HeaderMagazine.vue'
import FooterMagazine from './components/FooterMagazine.vue'
import MainPage from './components/MainPage.vue';
import { defineComponent, ref,reactive } from 'vue';
export default defineComponent({
  components: {
    MainPage,
    HeaderMagazine,
    FooterMagazine
  },
  setup(){
    const totalCount = ref(0);
    const savedItems = reactive({"items":{}})
    const handleIncrease = ()=>{
      totalCount.value+=1
    }
    const handleDecrease = ()=>{
      totalCount.value-=1
    }
    const addItem = (item)=>{
      if (savedItems.items[item.id]!==undefined){
        savedItems.items[item.id]["count"]+=1
      } else{
        savedItems.items[item.id] = {"count":1,"item":item}
      }
      console.log('Add element')
      console.log(savedItems)
    }
    const removeItem = (item)=>{
      if(savedItems.items[item.id]["count"]<=0){
        delete savedItems.items[item.id]
      }else{
        savedItems.items[item.id]["count"] -= 1
      }
      console.log('Remove element')
      console.log(savedItems)
    }
      // if (savedItems.hasOwnPropery(item.Id)!==false){
      //   savedItems
      // } else{

      // }
    
    return {
      totalCount,
      savedItems,
      addItem,
      removeItem,
      handleIncrease,
      handleDecrease
    }
  },
})

</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
</style>
