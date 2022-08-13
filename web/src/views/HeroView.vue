<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/images/logo.png" height="30">
      <div class="px-2 flex-1 mt-2">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2 text-white">攻略站</span>
      </div>
      <router-link :to="'/'" class="ai-center mt-2 text-white">
        <div>更多英雄 &gt;</div>
      </router-link>
    </div>
    <div>
      <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
        <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
          <div class="fs-sm">{{ model.title }} </div>
          <h2 class="my-2">{{ model.name }}</h2>
          <div class="fs-sm">{{ (model.categories).map(v => v.name).join('/') }}</div>
          <div class="d-flex js-between pt-2">
            <div class="scores d-flex ai-center flex-1" v-if="model.scores">
              <span>难度</span>
              <span class="badge bg-primary">{{ model.scores.difficult }}</span>
              <span>技能</span>
              <span class="badge bg-blue-1">{{ model.scores.skills }}</span>
              <span>攻击</span>
              <span class="badge bg-danger">{{ model.scores.attack }}</span>
              <span>生存</span>
              <span class="badge bg-dark">{{ model.scores.survive }}</span>
            </div>
            <!-- <router-link :to="/" class="text-grey fs-sm">
            皮肤： 2&gt;
            </router-link> -->
            <router-link to="/" class="text-grey fs-sm"><span>皮肤： 2 &gt;</span></router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div class="">
            <div class="p-3 bg-white">
              <div class="d-flex">
                <router-link to="/" class="flex-1 text-center"><button class="btn-lg"><i
                      class="iconfont icon-menu "></i>英雄介绍视频</button></router-link>
                <router-link to="/" class="flex-1 text-center"><button class="btn-lg"><i
                      class="iconfont icon-menu "></i>英雄介绍视频</button></router-link>
              </div>
              <!-- skills -->
              <div class="skills bg-white mt-4">
                <div class="d-flex jc-around">
                  <img :src="item.icon" v-for="(item, i) in model.skills" :key="item.name"
                     class="icon" :class="{ active: currentSkillIndex === i }" @click="currentSkillIndex = i">
                </div>
              </div>
              <div v-if="currentSkill">
                <div class="d-flex py-4">
                  <h3 class="m-0">{{currentSkill.name}}</h3>
                  <span class="text-grey-1 ml-4">(冷却值：{{currentSkill[this.currentSkillIndex].delay}} 消耗：{{currentSkill[this.currentSkillIndex].cost}})</span>
                </div>
                <p>{{currentSkill[this.currentSkillIndex].description}}</p>
              </div>
            </div>
            <m-card plain icon="menu" title="出装推荐" class="hero-items">
              <div class="fs-sl">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items1" :key="item.name">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-sl mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items2" :key="item.name">
                  <img :src="item.icon" class="icon">
                  <div class="fs-xs">{{item.name}}</div>
                </div>
              </div>
            </m-card>
            <m-card plain icon="menu" title="使用技巧">
              <p class="m-0">{{model.usageTips}}</p>
            </m-card>
            <m-card plain icon="menu" title="对抗技巧">
              <p class="m-0">{{model.battleTips}}</p>
            </m-card>
            <m-card plain icon="menu" title="团战思路">
              <p class="m-0">{{model.teamTips}}</p>
            </m-card>
            <m-card plain icon="menu" title="英雄关系">
              <div class="fs-xl">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.name" class="d-flex pt-3">
                <img :src="item.hero.avatar" height="50">
                <p class="flex-1 ml-3 m-0">{{item.description}}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      currentSkillIndex: 0,
      model: {
        banner: [],
        categories: [],
        scores: {
          difficult: [],
          skills: {
            name: {},
            icon: {}
          },
          attack: [],
          survive: [],
        }
      }
    }
  },
  computed:{
    currentSkill(){
      return this.model.skills
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}


</script>

<style lang="scss">
@import '../assets/scss/variables';
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
  }
}

.info {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

  .scores {
    .badge {
      margin: 0 0.25rem;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      border-radius: 50%;
      font-size: 0.6rem;
      border: 1px solid rgba(255, 255, 255, 0.2)
    }
  }
}

.skills{
  img.icon{
    width: 70px;
    height: 70px;
    border: 3px solid map-get($colors,'white');
    &.active{
      border: 3px solid map-get($colors,'primary');
    }
    border-radius: 45%;
  }
}

.hero-items{
  img.icon{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
</style>