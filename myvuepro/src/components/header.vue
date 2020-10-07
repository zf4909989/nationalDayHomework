<template>
  <div id="header" :class="{homeActive:ishome}">
    <template>
      <slot name="text"></slot>
    </template>
    <template>
      <slot name="search"></slot>
    </template>
    <template>
      <slot name="iconS"></slot>
    </template>
    <template>
      <slot name="iconL"></slot>
    </template>
    <template>
      <slot name="iconR"></slot>
    </template>
  </div>
</template>

<script>
export default {
  props: ["ishome"],
};
</script>

<style lang="less">
#header {
  width: 100%;
  height: 100/100rem;
  line-height: 100/100rem;
  font-size: 36/100rem;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  border: 1px solid #e0e0e0;
  #search {
    margin-top: 15/100rem;
    margin-left: -80/100rem;
    padding-left: 80/100rem;
    width: 80%;
    height: 70/100rem;
    font-size: 24/100rem;
    border: none;
    border-radius: 5px;
  }
  #iconS {
    position: absolute;
    left: 25px;
  }
  #iconL {
    position: absolute;
    right: 70px;
  }
  #iconR {
    position: absolute;
    right: 15px;
  }
  .icon {
    top: 30/100rem;
    width: 40/100rem;
    height: 40/100rem;
  }
}
.homeActive {
  background-color: #46bc58 !important;
  border: none !important;
}
</style>