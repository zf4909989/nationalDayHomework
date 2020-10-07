<template>
  <div id="item" @click="fn">
    <template v-if="!flag">
      <slot name="normalImg"></slot>
    </template>
    <template v-if="flag">
      <slot name="activeImg"></slot>
    </template>
    <p :class="{active:flag}">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: ["mark", "text", "curr"],
  computed: {
    flag() {
      if (this.mark == this.curr) {
        return true;
      }
      return false;
    },
  },
  methods: {
    fn() {
      this.$emit("sendVal", this.mark);
      this.$router.push("/" + this.mark);
    },
  },
};
</script>

<style>
.active {
  color: #46bc58;
}
</style>