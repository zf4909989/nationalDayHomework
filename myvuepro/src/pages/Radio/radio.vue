<template>
  <div id="radio">
    <Header>
      <template #text>
        <p v-text="'广播'"></p>
      </template>
      <template #iconL>
        <img src="../../assets/images/icon/ic_status_search_user.png" class="icon" id="iconL" />
      </template>
      <template #iconR>
        <img src="../../assets/images/icon/ic_chat_green.png" class="icon" id="iconR" />
      </template>
    </Header>
    <router-link to="login">
      <h4>登录发广播</h4>
    </router-link>
    <Radiolist
      v-for="(item,index) in radioArr"
      :key="index"
      :imgurl="item.imgurl"
      :title="item.title"
      :time="item.time"
      :topictitle="item.topic_title"
      :text="item.text"
      :like="item.like"
      :rep="item.rep"
      :read="item.read"
    ></Radiolist>
  </div>
</template>

<script>
import Header from "@/components/header";
import Radiolist from "@/components/radiolist";

export default {
  components: {
    Header,
    Radiolist,
  },
  data() {
    return {
      radioArr: [],
    };
  },
  mounted() {
    this.$axios("../../../static/data/radio.json").then((res) => {
      this.radioArr = res.data.radio_list;
    });
  },
};
</script>

<style>
h4 {
  margin: 0 5%;
  padding: 5% 0;
  border-bottom: 1px solid #c5c5c5;
}
</style>