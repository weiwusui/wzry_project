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
        <div class="nav-item mb-3" v-for="n in [1, 2, 3, 4]" :key="n">
          <i class="sprite sprite-news" :class="`sprite-${n}`"></i>
          <div class="py-2">{{ spriteName[n - 1] }}</div>
        </div>
        <div class="nav-item mb-3" v-for="n in [5, 6, 7, 8, 9, 10, 11, 12]" :key="n" refs="abc"
          :style="{ 'display': `${ds}` }">
          <i class="sprite sprite-news" :class="`sprite-${n}`"></i>
          <div class="py-2">{{ spriteName[n - 1] }}</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="cao">
        <i class="sprite sprite-arrow mr-1" :style="{ 'transform': `rotate(${deg}deg)` }"></i>
        <span>{{ bt }}</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{ category }">
        <router-link :to="`/articles/${news._id}`" v-for="(news, i) in category.newsList" :key="i">
          <div class="py-2 fs-lg d-flex">
            <span class="text-info">[{{ news.categoryName }}]</span>
            <span class="px-2">|</span>
            <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
            <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
          </div>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="-superhero" title="英雄列表" :categories="heroCats">
      <template #swiper>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide><img class="w-100" src="../assets/images/5617535045381.jpg"></swiper-slide>
          <swiper-slide><img class="w-100" src="../assets/images/39070448590418.jpg"></swiper-slide>
          <swiper-slide><img class="w-100" src="../assets/images/310571306364037.png"></swiper-slide>
          <swiper-slide><img class="w-100" src="../assets/images/782111465173105.jpg"></swiper-slide>
          <swiper-slide><img class="w-100" src="../assets/images/792691307550292.jpg"></swiper-slide>
          <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
        </swiper>
      </template>
      <template #items="{ category }">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width:20%"
            v-for="(hero, i) in category.heroList" :key="i">
            <div>
              <img :src="hero.avatar" class="w-100">
              <div class="text-dark">{{ hero.name }}</div>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>

    <m-list-card icon="menu" title="精彩视频" :categories="videosCats" class="jc-around">
      <template #items="{ category }">
        <div class="d-flex flex-wrap jc-between">
          <router-link :to="`/videos/${video._id}`" v-for="(video, i) in category.videoList" :key="i" style="width:49%">
            <div style="height:170px">
              <div>
              <img :src="video.cover" class="w-100">
              <span class="video title text-dark mb-1">{{ video.title }}</span>
              </div>
              <div class="d-flex jc-between mb-3 text-center">
                <div><i class="iconfont icon-shipin"></i>{{ video.plays }}</div>
                <div>{{ video.createdAt | date }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </m-list-card>
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
      ds: 'block',
      bt: '收起',
      deg: 0,
      spriteName: ['爆料站', '故事站', '周边商城', '体验服', '新人专区', '荣耀 传承', '王者营地', '公众号', '版本介绍', '对局环境', 'IP共创计划', '创意互动营'],
      swiperOption: {
        autoplay: { delay: 1000 },
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [],
      heroCats: [],
      videosCats: [],
    }
  },
  activated() {
  },
  watch: {
  },
  created() {
    this.fetchNewsCats()
    this.fetchHeroCats()
    this.fetchVideosCats()
  },
  mounted() {
  },
  methods: {
    cao() {
      if (this.ds === 'block') {
        this.ds = 'none'
        this.bt = '展开'
        this.deg = 180
        // transform: rotate(180deg);
      } else {
        this.ds = 'block'
        this.bt = '收起'
        this.deg = 0
      }
    },
    async fetchNewsCats() {
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
    },
    async fetchHeroCats() {
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
    },
    async fetchVideosCats() {
      const res = await this.$http.get('videos/list')
      this.videosCats = res.data
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
.video{
  &.title{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
