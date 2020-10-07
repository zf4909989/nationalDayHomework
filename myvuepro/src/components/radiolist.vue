<template>
  <div class="radioList">
    <div class="listHeader">
      <div class="userIcon">
        <img :src="imgurl" alt />
      </div>
      <div class="userInfo">
        <p>
          {{title}}
          <span>写了日记</span>
        </p>
        <p>{{time}}</p>
      </div>
    </div>
    <div class="content">
      <div class="info">
        <p>{{topictitle}}</p>
        <p>{{text}}</p>
      </div>
      <div class="more">
        <p>
          <span>点赞:{{like+'人'}}</span>
          <span>回复:{{rep+'人'}}</span>
          <span>查看:{{read+'人'}}</span>
          <span>···</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "imgurl",
    "title",
    "time",
    "topictitle",
    "text",
    "like",
    "rep",
    "read",
  ],
};
</script>

<style scoped lang="less">
.radioList {
  margin: 0 5%;
  padding: 5% 0;
  width: 90%;
  border-bottom: 1px solid #c5c5c5;
  .listHeader {
    display: flex;
    flex-flow: row;
    .userIcon {
      width: 15%;
      img {
        width: 80%;
        border-radius: 25px;
      }
    }
    .userInfo {
      p {
        &:nth-of-type(1) {
          font-weight: bold;
          span {
            color: #d4d4d4;
          }
        }
        &:nth-of-type(2) {
          font-size: 24/100rem;
          color: #d4d4d4;
        }
      }
    }
  }
  .content {
    width: 80%;
    margin-left: 15%;
    padding: 5%;
    background-color: #f9f9f9;
    .info {
      p {
        &:nth-of-type(1) {
          font-size: 24/100rem;
          font-weight: bold;
        }
        &:nth-of-type(2) {
          margin-top: 2%;
          font-size: 20/100rem;
          color: #cacaca;
        }
      }
    }
    .more {
      margin-top: 5%;
      p {
        font-size: 20/100rem;
        color: #cacaca;
        span {
          &:nth-of-type(4) {
            float: right;
          }
        }
      }
    }
  }
}
</style>