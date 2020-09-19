<template>
  <div class="search">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </form>
    <div class="content">
      <p>猜你喜欢</p>
      <div class="content_text">
        <ul>
          <li>前端课程2019版更新</li>
          <li>博学谷</li>
          <li>前端公开课</li>
          <li>前端8天训练营</li>
          <li>院校帮</li>
          <li>前端提升课</li>
          <li>前端</li>
          <li>传智播客</li>
          <li>黑马程序员</li>
          <li>酷丁鱼</li>
          <li>传智汇</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from "vant";

  export default {
    name: "search",
    data() {
      return {
        value: '',
      }
    },

    methods: {
      onSearch(val) {
        Toast('触发搜索按钮');
      },
    }
  }
</script>

<style>
  .content p {
    margin: 0;
    padding: 0;
    font-size: 16px;
    text-align: center;
  }
  .content .content_text ul{
    margin-top: 10px;
    list-style: none;
  }
  .content .content_text ul li{
    /*list-style: none;*/
    display: inline-block;
    margin: 0 20px;
    font-size: 35px;
  }
</style>
