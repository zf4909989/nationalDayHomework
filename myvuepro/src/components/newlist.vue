<template>
  <div class="newlist">
      <div class="textBox">
          <p>{{title}}</p>
          <p>{{desc}}</p>
          <p>{{'作者：'+author}}</p>
      </div>
      <div class="imgBox"><img :src="imgurl" alt=""></div>
  </div>
</template>

<script>
export default {
    props:['imgurl','title','desc','author']
}
</script>

<style scoped lang="less">
.newlist{
    width: 90%;
    padding: 3% 0;
    margin:0 5%;
    display: flex;
    flex-flow:row;
    border-bottom: 1px solid #c5c5c5;
    .textBox{
        width: 65%;
        font-size: 24/100rem;
        p{
            &:nth-of-type(2){
                color: #C7CBCC;
            }
            &:nth-of-type(3){
                font-size: 20/100rem;
                color: #D3D3D6;
            }
        }
    }
    .imgBox{
        width: 35%;
        img{
            margin-top: 5%;
            margin-left: 5%;
            width: 90%;
        }
    }
}
</style>