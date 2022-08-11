<template>
  <div class="page-article">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 text-blue pl-2 text-ellipsis">{{model.title}}</strong>
      <div class="text-grey fs-xs">
        2022-08-11
      </div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div class="pt-1">
        <router-link :to="`/articles/${item._id}`" v-for="item in model.related" :key="item._id"><div class="py-1 mt-2" >{{item.title}}</div></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      model:{}
    }
  },
  watch:{
    id:'fetch',
  },
  props:{
    id:{
      required:true
    }
  },
  methods:{
    async fetch(){
      const res= await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article{
  .icon-back{
    font-size: 1.6923rem;
  }
  .body{
    img{
      max-width: 100%;
      height: auto;
    }
    iframe{
      width: 100%;
      height:100%;
    }
  }
}
</style>