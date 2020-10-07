<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { obj } from "../static/utils.js";
import Footer from "@/components/tabbar";

export default {
  name: "App",
  components: {
    Footer,
  },

  mounted() {
    obj.setRem();
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
}
p{
  margin: 0;
}
#app {
  width: 100%;
}
</style>
