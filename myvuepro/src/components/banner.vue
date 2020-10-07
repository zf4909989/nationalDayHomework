<template>
  <div id="banner">
    <div class="swiper-container" :class="swiperId">
    <div class="swiper-wrapper">
        <slot name="swiper-slide"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="{'swiper-pagination':paginationshow,['swiper-pagination'+swiperId]:paginationshow,'swiperpaginationtype':swiperpaginationright}" class="test"></div>
    
    <!-- 如果需要导航按钮 -->
    <div :class="{'swiper-button-prev':swiperbuttonshow}"></div>
    <div :class="{'swiper-button-next':swiperbuttonshow}"></div>
</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.css"
export default {
    props:{
        swiperId:{type:String,default:''},
        // 是否显示分页
        paginationshow:{type:Boolean,default:true},
        // 设置轮播样式
        effect:{tyep:String,default:'slide'},
        // 分页器类型
        paginationtype:{type:String,default:'bullets'},
        // 是否需要导航按钮
        swiperbuttonshow:{type:Boolean,default:true},
        swiperpaginationright:{type:Boolean,default:false}
    },
mounted(){
    new Swiper ('.'+this.swiperId, {
    loop: true, // 循环模式选项
    slidesPerView: "auto",
    // loopedSlides: _this.bannerList.length,
    speed: 300,
    autoplay: {
    disableOnInteraction: false, //手动滑动之后不打断播放
    delay: 2000
    },
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })       
}
}
</script>

<style lang="less">
.swiper-slide img{
    width: 100%;
}
.swiperpaginationtype{
    padding-left:500/100rem !important;
}
.swiper-pagination-bullet-active{
    background-color: white;
}
</style>