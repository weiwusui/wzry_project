<template>
  <div class="card bg-white p-3 mt-3 ">
    <div class="card-header d-flex ai-center flex-wrap"
      :class="{ 'border-bottom': !plain || time, 'pb-3': !plain || time }">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2"><strong>{{ title }}</strong></div>
      <i class="iconfont icon-menu1 " v-if="!plain"></i>
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
    </div>
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, require: true },
    icon: { type: String, require: true },
    plain: { type: Boolean },
    time: { type: Boolean },
    dates: { type: Array, require: true }
  },
  data() {
    return {
      active: 0,
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
<style lang="scss">
@import '../assets/scss/variables';

.card {
  border-bottom: 1px solid $border-color;
}

.date {
  &.active {
    color: map-get($colors, 'primary');
    border-bottom: 3px solid map-get($colors, 'primary')
  }
}
</style>
