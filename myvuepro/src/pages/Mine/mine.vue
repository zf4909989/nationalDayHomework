<template>
  <div id="mine">
    <!-- header -->
    <Header>
      <template #text>
        <p v-text="'我的'"></p>
      </template>
      <template #iconR>
        <img src="../../assets/images/icon/ic_settings.png" class="icon" id="iconR" />
      </template>
    </Header>
    <!-- content -->
    <div class="topBox">
      <div class="contBox">
        <i class="iconfont icon-mimaguanli"></i>
        <p>密码管理</p>
      </div>
      <div class="contBox">
        <i class="iconfont icon-yinxingqia"></i>
        <p>银行卡管理</p>
      </div>
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>
          <span>
            <i class="iconfont" :class="item.url"></i>
          </span>
          {{item.title}}
          <span>
            <i class="iconfont icon-xiangyou"></i>
          </span>
        </p>
      </li>
    </ul>
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
      list: [
        { title: "风险承受评估能力", url: "icon-wenben" },
        { title: "安全保障", url: "icon-anquan" },
        { title: "我的关注", url: "icon-wode" },
        { title: "帮助中心", url: "icon-help" },
        { title: "关于我们", url: "icon-guanyu" },
        { title: "检查更新", url: "icon-jianchajihua" },
        { title: "联系客服", url: "icon-wode" },
      ],
    };
  },
};
</script>

<style lang="less">
.topBox {
  width: 100%;
  display: flex;
  .contBox {
    width: 50%;
    text-align: center;
    border-bottom: 1px solid #c5c5c5;
    padding: 5%;
    .iconfont {
      font-size: 60/100rem;
      color: #07d614;
    }

    &:nth-of-type(2) {
      margin-top: 4%;
      .iconfont {
        font-size: 40/100rem;
      }
    }
  }
}
ul {
  display: flex;
  flex-flow: column;
  li {
    height: 100/100rem;
    line-height: 100/100rem;
    border-bottom: 1px solid #c5c5c5;
    .iconfont {
      margin: 0 2% 0 4%;
      font-size: 36/100rem;
      color: #07d614;
    }
    .icon-xiangyou {
      float: right;
    }
  }
}
</style>