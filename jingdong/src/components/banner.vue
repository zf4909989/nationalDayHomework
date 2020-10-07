<template>
  <div class="banner">
    <nut-swiper
      direction="horizontal"
      :swiperData="dataItem"
      :canDragging="false"
      :paginationVisible="true"
      ref="demo2"
    >
      <div
        v-for="(item, index) in dataItem"
        :key="index"
        class="nut-swiper-slide"
      >
        <span>{{ item.name }}</span>
      </div>
    </nut-swiper>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>