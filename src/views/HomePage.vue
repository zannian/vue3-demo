<script setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>
<template>
  <div class="main-content">
    <el-row :gutter="20" class="row">
      <el-col :span="12" :offset="0">
        <el-card class="card" shadow="always" :body-style="{ padding: '20px' }">
          <template v-slot:header>
            <div>
              <span><!-- card title -->近期操作</span>
            </div>
          </template>
          <!-- card body -->
          <div class="card-body">
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12" :offset="0">
        <el-card class="card" shadow="always" :body-style="{ padding: '20px' }">
          <template v-slot:header>
            <div>
              <span><!-- card title -->数据分析 </span>
            </div>
          </template>
          <!-- card body -->
          <div class="card-body"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less">
.main-content {
  height: 100%;
  .row {
    height: 100%;
    .card {
      height: 100%;
    }
  }
  .card-body {
    height: auto;
  }
}
</style>
