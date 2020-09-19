<template>
  <div class="home">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <van-icon slot="left" size="36" name="envelop-o"/>
      <img class="pic_logo" slot="title" src="../assets/logo.png">
      <van-icon slot="right" size="36" name="search"/>
    </van-nav-bar>
    <van-tabs v-model="activeName" background="#f4f5f6" color="#466de2" title-active-color="#466de2">
      <van-tab title="头条" name="top">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="社会" name="shehui">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="国内" name="guonei">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="国际" name="guoji">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="娱乐" name="yule">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="体育" name="tiyu">
        <news-list :name="activeName"></news-list>
      </van-tab>
      <van-tab title="科技" name="keji">
        <news-list :name="activeName"></news-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  // // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import { Toast } from 'vant';
  import NewsList from "./NewsList";
  // import  NewsList  from "./NewsList";


  export default {
    name: 'Home',
    components: { NewsList },
    data() {
      return {
        activeName: 'top',
        article: null,
        list: []
      }
    },
    methods: {
      onClickLeft() {
        Toast('邮箱');
      },
      onClickRight() {
        this.$router.push('/search')
      },
    },
  }
</script>
<style>
  .home .pic_logo {
    margin-top: 10px;
    height: 50px;
  }
</style>
