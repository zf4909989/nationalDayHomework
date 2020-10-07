<template>
  <div id="tabbar">
    <Item
      v-for="(item,index) in imgList"
      :key="index"
      class="item"
      :mark="item.url"
      :text="item.text"
      :curr="currnav"
      @sendVal="getVal"
    >
      <template #normalImg>
        <img :src="item.imgurl" />
      </template>
      <template #activeImg>
        <img :src="item.imgactive" />
      </template>
    </Item>
  </div>
</template>

<script>
import Item from "@/components/item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      imgList: [
        {
          imgurl: require("../assets/images/icon/ic_tab_home_normal.png"),
          imgactive: require("../assets/images/icon/ic_tab_home_active.png"),
          url: "home",
          text: "首页",
        },
        {
          imgurl: require("../assets/images/icon/ic_tab_subject_normal.png"),
          imgactive: require("../assets/images/icon/ic_tab_subject_active.png"),
          url: "broadcast",
          text: "书影音",
        },
        {
          imgurl: require("../assets/images/icon/ic_tab_status_normal.png"),
          imgactive: require("../assets/images/icon/ic_tab_status_active.png"),
          url: "radio",
          text: "广播",
        },
        {
          imgurl: require("../assets/images/icon/ic_tab_group_normal.png"),
          imgactive: require("../assets/images/icon/ic_tab_group_active.png"),
          url: "group",
          text: "小组",
        },
        {
          imgurl: require("../assets/images/icon/ic_tab_profile_normal.png"),
          imgactive: require("../assets/images/icon/ic_tab_profile_active.png"),
          url: "mine",
          text: "我的",
        },
      ],
      currnav: "home",
    };
  },
  methods: {
    getVal(val) {
      this.currnav = val;
    },
  },
};
</script>

<style lang="less">
#tabbar {
  padding-top: 15/100rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #e0e0e0;
  background-color: #fff;
  .item {
    width: 20%;
    display: flex;
    flex-flow: column;
    align-items: center;
    img {
      width: 60/100rem;
    }
  }
}
</style>