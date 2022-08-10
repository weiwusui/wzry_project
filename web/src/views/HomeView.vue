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
        <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
    <m-card icon="menu" title="精彩视频"></m-card>
    <m-card icon="menu" title="新闻资讯"></m-card>
    <m-card icon="menu" title="新闻资讯"></m-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: { delay: 1000 },
        pagination: {
          el: '.pagination-home'
        }
      },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: '公告',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
          // newsList:[
          //   {
          //     categoryName:'公告',
          //     title:'6月2日全服不停机更新公告',
          //     date:'06/01'
          //   },
          //   {
          //     categoryName:'公告',
          //     title:'6月2日全服不停机更新公告',
          //     date:'06/01'
          //   },
          //   {
          //     categoryName:'公告',
          //     title:'6月2日全服不停机更新公告',
          //     date:'06/01'
          //   },
          //   {
          //     categoryName:'公告',
          //     title:'6月2日全服不停机更新公告',
          //     date:'06/01'
          //   },
          //   {
          //     categoryName:'公告',
          //     title:'6月2日全服不停机更新公告',
          //     date:'06/01'
          //   },
          // ]
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(() => ({
            categoryName: '新闻',
            title: '6月2日全服不停机更新公告',
            date: '06/01'
          }))
        },
      ]
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
