<template>
<div>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-openeds="['1']" unique-opened default-active="$router.path">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>内容管理</template>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/items/creat">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/heroes/creat">新建英雄</el-menu-item>
            <el-menu-item index="/heroes/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/creat">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">视频</template>
            <el-menu-item index="/videos/creat">新建视频</el-menu-item>
            <el-menu-item index="/videos/list">视频列表</el-menu-item>
            <!-- <el-menu-item index="/hotvideos/creat">新建热门视频</el-menu-item>
            <el-menu-item index="/hotvideos/list">热门视频</el-menu-item> -->
            <el-menu-item index="/v/creat">新建热门视频</el-menu-item>
            <el-menu-item index="/v/list">热门视频</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>运营管理</template>
          <el-menu-item-group>
            <template slot="title">广告</template>
            <el-menu-item index="/ads/creat">新建广告位</el-menu-item>
            <el-menu-item index="/ads/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>系统设置</template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/categories/creat">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/creat">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <span>admin</span>
        <el-dropdown>
          <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goToWeb">前台</el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出</el-dropdown-item>
            <el-dropdown-item @click.native="goToGithub">GitHub</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view :key="$router.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods:{
      exit() {
            localStorage.removeItem('token');
            this.$message({
                type: 'success',
                message: '退出成功'
            });
            this.$router.push('/login');
        },
        goToWeb() {
            window.open(location.origin +'/web');
        },
        goToGithub() {
            window.open('https://github.com/weiwusui/wzry_project');
        },
    }
  };
</script>