<template>
  <div id="header">
    <template>
      <slot name="search"></slot>
    </template>
    <template>
      <slot name="login"></slot>
    </template>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#header{
    width: 100%;
    .search{
      margin: 0 auto;
      width: 90%;
    }
}
</style>