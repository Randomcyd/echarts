<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView/TopView.vue'
import SalesView from '../components/SalesView/SalesView.vue'
import BottomView from '../components/BottomView/BottomView.vue'
import MapView from '../components/MapView/MapView.vue'

export default {
  name: 'Home',
  components: {
    TopView,BottomView,SalesView,MapView
  }
}
</script>

<style lang="scss" scoped>
 .home{
   width: 100%; 
   height: 100%; 
   padding: 20px;
   background: #eee;
   box-sizing: border-box;
 }
</style>
