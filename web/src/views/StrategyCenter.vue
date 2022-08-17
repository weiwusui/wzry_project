<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><img class="w-100" src="../assets/images/下载.png"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/下载 (1).png"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/下载 (8).jpg"></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/下载 (9).jpg"></swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <!-- <m-card plain time icon="menu" title="热门视频" :dates="hotvideosCats">
      <template #items="{ dates }">
        <router-link :to="`/v/${hotvideo._id}`" v-for="(hotvideo, i) in dates.vList.slice(0,10)" :key="i">
          <div class="py-2 fs-lg d-flex">
            <span>{{i+1}}</span>
            <span style="width:200px">{{hotvideo.title}}</span>
          </div>
        </router-link>
      </template>
    </m-card> -->
    <m-list-card1 icon="menu" title="热门视频" :categories="hotvideosCats">
      <template #items="{ category }">
        <router-link :to="`/v/${v._id}`" v-for="(v, i) in category.vList.slice(0,y)" :key="i">
          <div class="py-2 fs-lg d-flex">
            <span class="text-dark">{{i+1}}.</span>
            <span class="text-dark text-ellipsis flex-1">{{v.title}}</span>
            <i class="icontfont icon-menu"></i>{{'1.5万'}}
          </div>
        </router-link>
        <div class=" py-2 fs-sm bg-white" @click="cao">
        <div class="text-center ">{{ bt }}</div>
      </div>
      </template>
    </m-list-card1>

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
      y: 3,
      bt: '查看完整榜单',
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
      hotvideosCats: [],
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
    this.fetchHotVideosCats()
  },
  mounted() {
  },
  methods: {
    cao() {
      if (this.y === 3) {
        this.y = 10
        this.bt = '收起榜单'
      } else {
        this.y = 3
        this.bt = '查看完整榜单'
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
    },
    async fetchHotVideosCats() {
      const res = await this.$http.get('v/list')
      this.hotvideosCats = res.data
    },
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
