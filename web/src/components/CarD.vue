<template>
    <div class="card bg-white p-3 mt-3 ">
      <div class="card-header d-flex ai-center" :class="{'border-bottom':!plain,'pb-3':!plain}">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xl flex-1 px-2"><strong>{{title}}</strong></div>
        <i class="iconfont icon-menu1 " v-if="!plain"></i>
      </div>
      <div class="card-body pt-3">
        <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{type:String,require:true},
        icon:{type:String,require:true},
        plain:{type:Boolean}
    },
   data() {
      return {
      }
   },
   activated() {
   },
 watch: {
},
created(){
},
mounted(){
},
methods:{
}


}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.card{
    border-bottom: 1px solid $border-color;
}
</style>
