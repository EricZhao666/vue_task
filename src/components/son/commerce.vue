<template>
  <div class="title">商业货品</div>
  <div>
     
  <div class="leftcontent">
    <div class="title" style="  background-color: whitesmoke;">货架</div>

  <el-table :data="filterTableData"  border stripe style="width: 100%" max-height="550">
    <el-table-column  label="Name"  prop="name" />
    <el-table-column align="right">
      <template #header>
        <el-input  v-model="search" size="large" placeholder="商品搜索" clearable/>
      </template>
         <template  #default="scope">
        <el-button size="default" @click.prevent="opennew(scope.$index)">
         商品详情
        </el-button>
        <el-button size="default" @click.prevent="deleteRow(scope.$index)">
          货品出库
        </el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-button class="mt-4" style="text-align:center;width: 70%" @click="onAddItem">新增货品入库</el-button>
   </div>
   <div class="rightcontent">
     商品详情{{main}}
     </div>
     </div>
</template>

<script lang="ts" setup>        //lang="ts" 是作为ts  
import {ref } from 'vue'
const now = new Date()
const filterTableData= ref([
  {
   name: '商业用品1',
  },
  {
    name: '商业用品2',
  },
  {
     name: '商业用品3',

  },
])
const opennew = (index: number) => {
  console.log(index); 



}
const deleteRow = (index: number) => {

  filterTableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  filterTableData.value.push({
    name: '商业用品',
  })
}

</script>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>


<style>
.title{
  font-size:22px;
  font-weight:bold;
  color: #545c64;
  background-color: white;
}
.leftcontent{
  float:left;
  width:50%;
  height:650px;
  background-color: whitesmoke;
}
.rightcontent{
  float:left;
  width:50%;
  height:650px;
  background-color: aqua;
}
</style>