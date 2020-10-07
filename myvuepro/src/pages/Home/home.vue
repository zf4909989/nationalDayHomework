<template>
  <div id="home">
    <Header ishome="true">
      <template #search>
        <input type="text" placeholder="影视 图书 长篇 小组等" id="search" />
      </template>
      <template #iconS>
        <img src="../../assets/images/icon/ic_group_search_small.png" class="icon" id="iconS" />
      </template>
      <template #iconL>
        <img src="../../assets/images/icon/ic_scan_gray.png" class="icon" id="iconL" />
      </template>
      <template #iconR>
        <img src="../../assets/images/icon/ic_chat_white.png" class="icon" id="iconR" />
      </template>
    </Header>
    <Banner swiperId="swiperId1" :swiperbuttonshow="false" :swiperpaginationright="true">
      <template #swiper-slide>
        <div class="swiper-slide"><img src="../../assets/images/banner/01.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/banner/02.jpg" alt=""></div>
      <div class="swiper-slide"><img src="../../assets/images/banner/03.jpg" alt=""></div>
      </template>
    </Banner>
    <Newlist v-for="(item,index) in listArr" :key="index" :imgurl="item.target.cover_url" :title="item.title" :desc="item.target.desc" :author="item.target.author.name"></Newlist>
  </div>
</template>

<script>
import Header from "@/components/header";
import Banner from "@/components/banner";
import Newlist from "@/components/newlist";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Newlist
  },
  data(){
    return{
      listArr:[]
    }
  },
  mounted(){
    this.$axios.get('../../../static/data/homeData.json')
    .then(
      res=>{
        this.listArr=res.data.recommend_feeds;
      }
    )
  }
};
</script>

<style>
</style>