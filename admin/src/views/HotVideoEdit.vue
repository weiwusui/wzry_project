<template>
  <div class="about">
    <h1>{{ id ? '编辑' : '新建' }}视频</h1>

    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="封面">
        <el-upload class="avatar-uploader" :action="$http.defaults.baseURL + '/upload'" :show-file-list="false"
          :headers="getAuthHeaders()" :on-success="res => $set(model, 'cover', res.url)">
          <img v-if="model.cover" :src="model.cover" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="播放量">
        <el-input v-model="model.plays"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-input v-model="model.createdAt"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import http from "@/http";
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {

    }
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {
      },
      categories: []
    }
  },
  methods: {
    async save() {
      let res
      if (this.id) { res = await this.$http.put(`rest/hotvideos/${this.id}`, this.model) }
      else {
        res = await this.$http.post('rest/hotvideos', this.model)
      }

      this.$router.push('/hotvideos/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const res = await this.$http.get(`rest/hotvideos/${this.id}`)
      this.model = res.data
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`)//这里不用改，获取分类数据，改了竟然也不报错
      this.categories = res.data
    }
  },
  created() {
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>
