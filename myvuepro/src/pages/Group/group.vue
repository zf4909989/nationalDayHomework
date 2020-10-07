<template>
  <div id="group">
    <Header>
      <template #text>
        <p v-text="'小组'"></p>
      </template>
      <template #iconL>
        <img src="../../assets/images/icon/ic_actionbar_search_icon.png" class="icon" id="iconL" />
      </template>
      <template #iconR>
        <img src="../../assets/images/icon/ic_chat_green.png" class="icon" id="iconR" />
      </template>
    </Header>
    <Grouplist v-for="(item,index) in group" :key="index" :title="item.title" :grouplist="group[index]"></Grouplist>
  </div>
</template>

<script>
import Header from "@/components/header";
import Grouplist from "@/components/grouplist";

export default {
  components: {
    Header,
    Grouplist,
  },
  data() {
    return {
      group: [],
    };
  },
  methods: {},
  mounted() {
    this.$axios("../../../static/data/groupData.json").then((res) => {
      this.group = res.data.group;
      console.log(this.group);
    });
  },
};
</script>

<style>
</style>