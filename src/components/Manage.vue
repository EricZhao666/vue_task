<template>

<div class="menu1">仓库管理系统</div>
  <div class="menu2">
  <el-menu
    :default-active="activeIndex2"   
    class="el-menu-demo"
    mode="horizontal"      
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
  
  <!-- 用mode=horizontal来表示水平菜单 -->
   <el-menu-item class="interval"></el-menu-item> 
   <el-menu-item class="interval"></el-menu-item> 
  <router-link :to="{ name: 'Home' }">
    <el-menu-item index="1">仓库面板Home</el-menu-item> 
     </router-link>
    
   
    <!-- 定义workspace中的分级导航栏 -->
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item class="interval"></el-menu-item> 
    <router-link :to="{ name: 'Menagement' }">
    <el-menu-item index="2">后台管理menage</el-menu-item>
   </router-link >
     <el-menu-item class="interval"></el-menu-item> 
    <router-link :to="{ name: 'System' }">
    <el-menu-item index="3">返回登录Login</el-menu-item>
      </router-link>
  </el-menu>
 
  </div>



</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.menu1{
  float:left;
 text-align:center;
  width:35%;
  font-size:25px;
  font-weight: bold;
}
.menu2{
position:relative;
 float:left;

width:65%;
}
.el-menu-demo{
  margin:0% auto;

}
.interval{
  width:10%;
}

</style>