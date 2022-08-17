<template>
  <div class="about">
    <h1>视频列表</h1>
    <el-table :data="items">
          <el-table-column prop="_id" label="ID" width="240"></el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template slot-scope="scope">
              <el-button type="text" size="small" 
              @click="$router.push(`/videos/edit/${scope.row._id}`)">编辑</el-button>
              <el-button type="text" size="small" 
              @click="remove(scope.row)">删除</el-button>
            </template>
          </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default{
  data(){
    return {
      items : []
      }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get('rest/videos')
      this.items = res.data
    },
    async remove(row){
       this.$confirm(`是否删除视频${row.name}`, '提示', {//row.name?
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(async() => {
          const res = await this.$http.delete(`rest/videos/${row._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.fetch()
        })
    }
  },
  created(){
    this.fetch()
  }




}

</script>
