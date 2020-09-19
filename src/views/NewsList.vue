<template>
  <div class="card" >
    <van-row @click="onchange(item.url)" :key="index" v-for="(item, index) in articleList">
      <van-col span="24">
        <span class="text">{{item.title}}</span>
      </van-col>
      <van-col span="24">
        <van-row gutter="14" class="pic">
          <van-col span="12">
            <img  v-lazy=item.thumbnail_pic_s></van-col>
          <van-col span="12">
            <img  v-lazy=item.thumbnail_pic_s02></van-col>
        </van-row>
      </van-col>
      <van-col span="24">
        <div class="bottom_text">
          <span >时间：{{item.date}}</span><span>作者：{{item.author_name}}</span>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { getArticleById } from '@/api/article'
  export default {
    props: ['name'],
    name: "NewsList",
    data() {
      return {
        articleList: null,
      }
    },
    created() {
      this.loadArticle()
    },
    methods: {
      async loadArticle () {
        try {
          const { data } = await getArticleById(this.name)
          this.articleList = data
        } catch (err) {
        }
      },
      onchange (url) {
        window.location.href = url
      }
    }
  }
</script>

<style scoped>
.card {
  margin: 10px 16px 0;
  border-bottom: 1px solid #f5f6f8;
}
  .card .text {
    font-size: 35px;
    font-weight: 700;
  }
  .card .pic {
    margin-top: 10px;
  }
  .card .pic img {
    width: 100%;
  }
  .card .bottom_text {
    font-size: 16px;
    color: #bfbfbf;
    margin-bottom: 10px;
  }
  .card .bottom_text span {
    margin-right: 20px;
  }
</style>
