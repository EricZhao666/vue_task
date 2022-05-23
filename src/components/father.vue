<template>
<div>
<div> it is father</div>
<el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  ><el-menu-item class="interval"></el-menu-item> 
   <el-menu-item index="0" >仓库管理系统</el-menu-item>
   <el-menu-item class="interval"></el-menu-item> 
    <el-menu-item index="1" @click="try1">仓库面板Home</el-menu-item>
    <el-menu-item class="interval"></el-menu-item> 
    <!-- <router-link :to="{ name: 'Menagement' }"> -->
    <el-menu-item index="2" @click="try2">后台管理menage</el-menu-item>
      <!-- </router-link > -->
    <el-menu-item class="interval"></el-menu-item> 
     
    <el-menu-item index="3" @click="onSubmit3">返回登录Login</el-menu-item>

  </el-menu>


<div class="menu3">
<div class="title2">仓库货品分类</div>
 <el-row>
          <el-col>         
            <el-menu
              default-active="1-1"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <el-menu-item-group>
                  <el-menu-item class="el-menu-item" index="1-1">商业货物</el-menu-item>
 
                    <el-menu-item class="interval2"></el-menu-item> 

                  <el-menu-item class="el-menu-item" index="1-2">工业货物</el-menu-item>
            
                    <el-menu-item class="interval2"></el-menu-item> 
                  <el-menu-item class="el-menu-item" index="1-3">农业货物</el-menu-item>
                    <el-menu-item class="interval2"></el-menu-item> 
                  <el-menu-item class="el-menu-item" index="1-4">企业货物</el-menu-item>
                    <el-menu-item class="interval2"></el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                    <el-menu-item class="interval2"></el-menu-item> 
                <el-menu-item class="interval2"></el-menu-item> 
                <el-menu-item class="interval2"></el-menu-item> 
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
</div>
   <router-view></router-view>
   </div>
</template>

<script>
export default {
method:{
    try1(){
 this.$router.push('/test');
    },
    try2(){
     this.$router.push('/system');    
    },
    try3(){
     this.$router.push('/father/test2');    
    }
}
}
</script>

<style>

</style>