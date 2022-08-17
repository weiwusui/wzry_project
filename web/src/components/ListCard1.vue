<template>
  <div class="card bg-white p-3 mt-3 ">
    <div class="card-header d-flex ai-center flex-wrap">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2"><strong>{{ title }}</strong></div>

      <!-- <div v-if="time" class="d-flex flex-wrap jc-between">
        <div class="date ml-3" :class="{ active: active === i }" v-for="(date, i) in dates" :key="i"
          @click="$refs.list.swiper.slideTo(i)">
          {{ date.name }}
        </div>
      </div> -->
      <!-- <div class="pt-3" v-if="time">
        <swiper ref="list" :options="{ autoHeight: true }" @slide-change="() => active = $refs.list.swiper.realIndex">
          <swiper-slide v-for="(dates, i) in dates" :key="i">
            <slot name="items" :dates="dates"></slot>
          </swiper-slide>
        </swiper>
      </div> -->
      <slot name="swiper"></slot>
         <div class="nav jc-between d-flex flex-wrap">
             <div class="nav-item mr-2" :class="{ active:active === i }"
             v-for="(category,i) in categories" :key="i"
             @click="$refs.list.swiper.slideTo(i)">
                {{category.name}}
             </div>
         </div>
         </div>
         <div class="pt-3">
             <swiper ref="list" :options="{autoHeight:true}"
             @slide-change ="() => active = $refs.list.swiper.realIndex">
                 <swiper-slide v-for="(category,i) in categories" :key="i">                    <slot name="items" :category="category"></slot>
                 </swiper-slide>
             </swiper>
         </div>
    
    <div class="card-body pt-1">
      <slot></slot>
    </div>
  </div>
</template>
<!-- // <template>
//     <m-card :icon="icon" :title="title">
//         <slot name="swiper"></slot>
//         <div class="nav jc-between">
//             <div class="nav-item" :class="{ active:active === i }"
//             v-for="(category,i) in categories" :key="i"
//             @click="$refs.list.swiper.slideTo(i)">
//                 <div class="nav-link">{{category.name}}</div>
//             </div>
//         </div>
//         <div class="pt-3">
//             <swiper ref="list" :options="{autoHeight:true}"
//             @slide-change ="() => active = $refs.list.swiper.realIndex">
//                 <swiper-slide v-for="(category,i) in categories" :key="i">
//                     <slot name="items" :category="category"></slot>
//                 </swiper-slide>
//             </swiper>
//         </div>
//     </m-card>
// </template> -->
<script>
export default {
    props: {
        icon: { type: String, requrie: true },
        title: { type: String, requrie: true },
        categories: { type: Array, require: true },
        plain: { type: Boolean },
    },
    data() {
        return {
            active : 0
        }
    },
    activated() {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }


}
</script>
<style>
</style>
