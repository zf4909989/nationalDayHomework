<template>
  <div id="broadcast">
    <Header>
      <template #text>
        <p v-text="'书影音'"></p>
      </template>
      <template #iconL>
        <img src="../../assets/images/icon/ic_actionbar_search_icon.png" class="icon" id="iconL" />
      </template>
      <template #iconR>
        <img src="../../assets/images/icon/ic_chat_green.png" class="icon" id="iconR" />
      </template>
    </Header>
    <ul>
      <li
        v-for="(item,index) in broadcastArr"
        :key="index"
        @click="change(item.url,index)"
        :class="{'liActive':liActive==index}"
      >{{item.name}}</li>
    </ul>
    <div class="showBox" v-for="(item,index) in broadcastList" :key="index">
      <img :src="item.cover" alt />
      <p class="title">{{item.title}}</p>
      <p>{{'评分'+item.rate}}</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      broadcastArr: [
        { name: "电影", url: "movie" },
        { name: "读书", url: "read" },
        { name: "电视", url: "tv" },
        { name: "同城", url: "city" },
        { name: "音乐", url: "music" },
      ],
      activeConten: "movie",
      liActive: 0,
      broadcastList: [
        {
          rate: "8.9",
          cover_x: 2000,
          title: "绿皮书",
          url: "https://movie.douban.com/subject/27060077/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549177902.webp",
          id: "27060077",
          cover_y: 3167,
          is_new: false,
        },
        {
          rate: "6.7",
          cover_x: 3158,
          title: "我们",
          url: "https://movie.douban.com/subject/27053945/",
          playable: false,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551094671.webp",
          id: "27053945",
          cover_y: 5000,
          is_new: false,
        },
        {
          rate: "6.7",
          cover_x: 7018,
          title: "云雾笼罩的山峰",
          url: "https://movie.douban.com/subject/30336318/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2553741104.webp",
          id: "30336318",
          cover_y: 10000,
          is_new: true,
        },
        {
          rate: "6.7",
          cover_x: 600,
          title: "复仇者",
          url: "https://movie.douban.com/subject/30299234/",
          playable: false,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545190511.webp",
          id: "30299234",
          cover_y: 780,
          is_new: true,
        },
        {
          rate: "6.3",
          cover_x: 800,
          title: "JT·莱罗伊",
          url: "https://movie.douban.com/subject/26844189/",
          playable: false,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2554640430.webp",
          id: "26844189",
          cover_y: 1000,
          is_new: true,
        },
        {
          rate: "8.3",
          cover_x: 5906,
          title: "调音师",
          url: "https://movie.douban.com/subject/30334073/",
          playable: true,
          cover:
            "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2551995207.webp",
          id: "30334073",
          cover_y: 8268,
          is_new: false,
        },
        {
          rate: "7.9",
          cover_x: 1786,
          title: "流浪地球",
          url: "https://movie.douban.com/subject/26266893/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.webp",
          id: "26266893",
          cover_y: 2500,
          is_new: false,
        },
        {
          rate: "6.1",
          cover_x: 1500,
          title: "反贪风暴4",
          url: "https://movie.douban.com/subject/27202819/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.webp",
          id: "27202819",
          cover_y: 2127,
          is_new: false,
        },
        {
          rate: "7.8",
          cover_x: 1575,
          title: "海市蜃楼",
          url: "https://movie.douban.com/subject/30164448/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551172384.webp",
          id: "30164448",
          cover_y: 2329,
          is_new: false,
        },
        {
          rate: "7.0",
          cover_x: 1968,
          title: "惊奇队长",
          url: "https://movie.douban.com/subject/26213252/",
          playable: false,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2548870813.webp",
          id: "26213252",
          cover_y: 2756,
          is_new: false,
        },
        {
          rate: "6.9",
          cover_x: 7142,
          title: "飞驰人生",
          url: "https://movie.douban.com/subject/30163509/",
          playable: true,
          cover:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.webp",
          id: "30163509",
          cover_y: 10000,
          is_new: false,
        },
      ],
    };
  },
  methods: {
    change(val, num) {
      this.activeConten = val;
      this.liActive = num;
      this.$axios("../../../static/data/" + this.activeConten + ".json").then(
        (res) => {
          this.broadcastList = res.data.subjects;
        }
      );
    },
  },
};
</script>

<style lang="less">
ul {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #c5c5c5;
}
li {
  width: 20%;
  padding: 2% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.liActive {
  background-color: #07d614;
  color: #fff;
}

.showBox {
  width: 50%;
  display: flex;
  flex-flow: column;
  text-align: center;
  float: left;
  &:nth-of-type(2n) {
    margin-top: 200/100rem;
  }
  img {
    margin: 10%;
    width: 80%;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>