<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img class="w-100" src="../assets/images/581c4d7676e617caf1ad13fdb1c8ae82.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/41335cbdc1e709f5aab07428da05e809.jpeg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/cf6dbd8088adbc4388f738c6a364f020.jpeg"></swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link :to="`/articles/${news._id}`"  v-for="(news, i) in category.newsList" :key="i">
          <div class="py-2 fs-lg d-flex">
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date}}</span>
          </div>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="-superhero" title="英雄列表" :categories="heroCats">
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <div class="p-2 text-center" style="width:20%" v-for="(hero, i) in category.heroList" :key="i">
          <img :src="hero.avatar" class="w-100">
          <div>{{hero.name}}</div>
        </div>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu" title="精彩视频"></m-card>
    <m-card icon="menu" title="图文攻略"></m-card>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: { delay: 1000 },
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroCats:[]
    }
  },
  activated() {
  },
  watch: {
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  mounted() {
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    }
  }


}
</script>
<style lang="scss">
@import '../assets/scss/variables';

.swiper-pagination-bullet {
  opacity: 1 !important;
  border-radius: .1538rem !important;
  background: #fff !important;

  &.swiper-pagination-bullet-active {
    background: map-get($colors, 'info') !important;
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;

    &:nth-child(4n+1) {
      border-left: none;
    }
  }
}
</style>
