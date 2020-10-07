<template>
  <div>
    <Header>
      <template #search>
        <nut-searchbar
          v-model="val"
          placeText="请输入你要查找的内容"
          :hasIcon="true"
          :hasTextButton="true"
          textInfo="登录"
          customClass="search"
        ></nut-searchbar>
      </template>
    </Header>
    <!-- swiper -->
    <nut-swiper
      direction="horizontal"
      :autoPlay="3000"
      :paginationVisible="true"
    >
      <div
        class="nut-swiper-slide"
        v-for="(item, index) in imgArr"
        :key="index"
      >
        <span><img :src="item.url" alt="" /></span>
      </div>
    </nut-swiper>
    <!-- sort -->
    <nut-tabbar :tabbar-list="tabList1"> </nut-tabbar>
    <nut-tabbar :tabbar-list="tabList2"> </nut-tabbar>
    <!-- choujiang -->
    <img src="../../assets/images/img/fuli.jpg" alt="" />
    <!-- miaosha -->
    <div class="miaosha">
      <div class="mtop">
        <div>
          <nut-icon type="action" size="20px"> </nut-icon>
          <nut-countdown :end-time="end"> </nut-countdown>
        </div>
        <p>精选轮番秒</p>
      </div>
      <div class="mscontent">
        <div class="msbox" v-for="(item, index) in msArr" :key="index">
          <img :src="item.url" alt="" />
          <p class="saleP">{{ "¥" + item.sale }}</p>
          <p class="normalP">{{ "¥" + item.normal }}</p>
        </div>
      </div>
    </div>
    <!-- life -->
    <img src="../../assets/images/img/aishenghuo.png" alt="" />
    <div class="lifeBox">
      <img src="../../assets/images/img/cp1.jpg" alt="" />
      <img src="../../assets/images/img/cp2.jpg" alt="" />
      <img src="../../assets/images/img/cp3.jpg" alt="" />
    </div>
    <!-- recommend -->
    <div class="reTop">
      <p>
        <span><nut-icon type="action" size="20px"> </nut-icon></span>为您推荐
      </p>
    </div>
    <div class="recommendBox">
      <div class="reContent" v-for="(item, index) in recommenArr" :key="index">
        <img :src="item.url" alt="" />
        <p class="reTitle">阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿</p>
        <p class="rePrice">{{ "¥" + item.price }}</p>
        <div class="reBottom">
          <p>{{ "好评率" + item.nice + "%" }}</p>
          <p class="like">看相似</p>
        </div>
      </div>
    </div>
    <!-- bottom -->
    <nut-tabbar
      class="btTabbar"
      type="card"
      :tabbar-list="tabList3"
    ></nut-tabbar>
    <nut-tabbar class="btTabbar" :tabbar-list="tabList4"></nut-tabbar>
    <p class="btTitle">阿巴阿巴阿巴</p>
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
      val: "",
      imgArr: [
        {
          url: require("../../assets/images/img/l1.jpg"),
        },
        {
          url: require("../../assets/images/img/l2.jpg"),
        },
        {
          url: require("../../assets/images/img/l3.jpg"),
        },
        {
          url: require("../../assets/images/img/l4.jpg"),
        },
        {
          url: require("../../assets/images/img/l5.jpg"),
        },
        {
          url: require("../../assets/images/img/l6.jpg"),
        },
        {
          url: require("../../assets/images/img/l7.jpg"),
        },
        {
          url: require("../../assets/images/img/l8.jpg"),
        },
      ],
      tabList1: [
        {
          tabTitle: "分类查询",
          icon: require("../../assets/images/icon/nav0.png"),
          activeIcon: require("../../assets/images/icon/nav0.png"),
        },
        {
          tabTitle: "物流查询",
          icon: require("../../assets/images/icon/nav1.png"),
          activeIcon: require("../../assets/images/icon/nav1.png"),
        },
        {
          tabTitle: "购物车",
          icon: require("../../assets/images/icon/nav2.png"),
          activeIcon: require("../../assets/images/icon/nav2.png"),
        },
        {
          tabTitle: "我的京东",
          icon: require("../../assets/images/icon/nav3.png"),
          activeIcon: require("../../assets/images/icon/nav3.png"),
        },
      ],
      tabList2: [
        {
          tabTitle: "京东生鲜",
          icon: require("../../assets/images/icon/nav4.png"),
          activeIcon: require("../../assets/images/icon/nav4.png"),
        },
        {
          tabTitle: "领券中心",
          icon: require("../../assets/images/icon/nav5.png"),
          activeIcon: require("../../assets/images/icon/nav5.png"),
        },
        {
          tabTitle: "京东超市",
          icon: require("../../assets/images/icon/nav6.png"),
          activeIcon: require("../../assets/images/icon/nav6.png"),
        },
        {
          tabTitle: "我的关注",
          icon: require("../../assets/images/icon/nav7.png"),
          activeIcon: require("../../assets/images/icon/nav7.png"),
        },
      ],
      tabList3: [
        {
          tabTitle: "登录",
        },
        {
          tabTitle: "注册",
        },
        {
          tabTitle: "反馈",
        },
        {
          tabTitle: "返回顶部",
        },
      ],
      tabList4: [
        {
          tabTitle: "客户端",
        },
        {
          tabTitle: "触屏版",
        },
        {
          tabTitle: "电脑版",
        },
      ],
      msArr: [
        {
          url: require("../../assets/images/img/pro01.jpg"),
          sale: 80,
          normal: 150,
        },
        {
          url: require("../../assets/images/img/pro02.jpg"),
          sale: 10,
          normal: 30,
        },
        {
          url: require("../../assets/images/img/pro03.jpg"),
          sale: 40,
          normal: 100,
        },
        {
          url: require("../../assets/images/img/pro04.jpg"),
          sale: 80,
          normal: 140,
        },
      ],
      recommenArr: [
        {
          url: require("../../assets/images/img/item01.jpg"),
          price: 99,
          nice: 94,
        },
        {
          url: require("../../assets/images/img/item02.jpg"),
          price: 198,
          nice: 99,
        },
        {
          url: require("../../assets/images/img/item03.jpg"),
          price: 1988.0,
          nice: 99,
        },
        {
          url: require("../../assets/images/img/item04.jpg"),
          price: 23.8,
          nice: 99,
        },
      ],
      end: "0",
    };
  },
};
</script>

<style scpoed lang="less">
img {
  width: 100%;
}
.nut-searchbar {
  position: fixed;
  top: 0;
  z-index: 2;
  top: 10/100rem;
  left: 30/100rem;
  .btn-search {
    span {
      color: white;
    }
  }
}
.nut-swiper {
  height: auto;
  .nut-swiper-pagination {
    bottom: 28/100rem !important;
  }
}

.nut-tabbar {
  margin: 0;
  border: none;
}

.mtop {
  padding: 2% 5%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.mscontent {
  padding: 2%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  .msbox {
    text-align: center;
    img {
      margin-left: 10%;
      width: 80%;
    }
    .saleP {
      color: red;
      font-size: 28/100rem;
      font-weight: bold;
    }
    .normalP {
      color: #c5c5c5;
      font-size: 24/100rem;
      text-decoration: line-through;
    }
  }
}
.lifeBox {
  padding: 2%;
  img {
    float: left;
    width: 50%;
    border: 1px solid #c5c5c5;
    box-sizing: border-box;
  }
}
.reTop {
  text-align: center;
}
.recommendBox {
  .reContent {
    padding: 2%;
    float: left;
    width: 50%;
    border: 1px solid #c5c5c5;
    box-sizing: border-box;
    .reTitle {
      font-size: 20/100rem;
    }
    .rePrice {
      font-size: 28/100rem;
      font-weight: bold;
      color: red;
    }
    .reBottom {
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      align-items: center;
      .like {
        border: 1px solid #c5c5c5;
        padding: 2%;
      }
    }
  }
}
.btTabbar {
  padding: 2%;
  height: 50/100rem;
}
.btTitle {
  margin-bottom: 140/100rem;
  font-size: 24/100rem;
  color: #c5c5c5;
  text-align: center;
}
</style>