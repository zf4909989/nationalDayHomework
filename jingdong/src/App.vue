<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { obj } from "../static/utils.js";
import Footer from "@/components/footer";

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

<style>
*,
body,
html,
ul,
li {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body {
  font-size: 16px;
}
#app {
  margin: 0 auto;
  width: 100%;
}
Footer {
  position: fixed;
  bottom: 0;
}
</style>
