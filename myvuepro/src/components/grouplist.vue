<template>
  <div class="grouplist">
    <p class="title">{{title}}</p>
    <div class="listBox" v-for="(item,index) in grouplist.group_list" :key="index">
      <div class="topBox">
        <div class="tLBox">
          <img :src="item.img_url" alt />
          <p>{{item.group_name}}</p>
        </div>
        <p class="num">{{item.group_member}}</p>
      </div>
      <div class="bomBox">
        <p>{{item.topic_title}}</p>
      </div>
    </div>
    <p class="more">更多相关小组</p>
  </div>
</template>

<script>
export default {
  props: ["title", "grouplist"],
};
</script>

<style lang="less" scoped>
.grouplist {
  width: 90%;
  padding: 5% 0;
  margin: 0 5%;
  .title {
    font-size: 36/100rem;
  }
  .listBox {
    display: flex;
    flex-flow: column;
    border-bottom: 1px solid #c5c5c5;
    .topBox {
      padding-top: 4%;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      .tLBox {
        width: 70%;
        display: flex;
        flex-flow: row;
        align-items: center;
        img {
          width: 15%;
        }
        p {
          color: black;
          font-size: 24/100rem;
          margin-left: 5%;
        }
      }
      p {
        font-size: 24/100rem;
        color: #dbdbdb;
      }
    }
    .bomBox {
      padding: 4% 0 5% 0;
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        font-size: 24/100rem;
        color: #d4d4d4;
      }
    }
  }
  .more{
    margin-top: 50/100rem;
    text-align: center;
    color: #56C469;
  }
}
</style>