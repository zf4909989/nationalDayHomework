<template>
  <div id="longinT">
    <div id="closeIcon"></div>
    <h2 id="title">登陆豆瓣</h2>
    <p id="warm">
      登录注册表示同意
      <span id="agreement">豆瓣使用协议、隐私政策</span>
    </p>
    <template>
      <slot name="uname"></slot>
    </template>
    <template>
      <slot name="psw"></slot>
    </template>
    <input type="submit" value="登陆" id="submit" />
    <template>
      <slot name="otherlink"></slot>
    </template>
    <p id="otherLogin">第三方登录</p>
    <div class="otherIcon"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
#longinT {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  #closeIcon {
    position: absolute;
    top: 30/100rem;
    left: 10/100rem;
    display: inline-block;
    width: 45/100rem;
    height: 4/100rem;
    background: #ababab;
    transform: rotate(45deg);
  }
  #closeIcon::after {
    content: "";
    display: block;
    width: 45/100rem;
    height: 4/100rem;
    background: #ababab;
    transform: rotate(-90deg);
  }
  #title {
    margin-top: 100/100rem;
  }
  #warm {
    font-size: 24/100rem;
    color: #c8c8c8;
    #agreement {
      color: #60c871;
    }
  }
  .input {
    position: relative;
    padding-left: 20/100rem;
    width: 95%;
    height: 80/100rem;
  }
  #unameBox {
    position: relative;
    width: 100%;
    #uname {
      margin-top: 35/100rem;
      border: 1px solid #e7e7e7;
    }
    #phoneHeader {
      position: absolute;
      top: 55/100rem;
      left: 30/100rem;
    }
  }
  #pswBox {
    position: relative;
    width: 100%;
    #psw {
      border: 1px solid #e7e7e7;
      border-top: none;
    }
    #code {
      position: absolute;
      top: 20/100rem;
      right: 40/100rem;
      color: #60c871;
    }
  }
  #submit {
    margin-top: 35/100rem;
    width: 95%;
    height: 80/100rem;
    border: none;
    color: white;
    background-color: #a0deaa;
  }
  #otherlink {
    margin-top: 20/100rem;
    width: 95%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    #olL {
      font-size: 24/100rem;
      color: #60c871;
      & span:nth-of-type(2) {
        margin-left: 10/100rem;
      }
    }
    #olR {
      font-size: 24/100rem;
      color: #6d6d6d;
    }
  }
  #otherLogin {
    margin-top: 100/100rem;
    font-size: 22/100rem;
    color: #c8c8c8;
  }
}
.isNum {
  padding-left: 50px !important;
}
</style>