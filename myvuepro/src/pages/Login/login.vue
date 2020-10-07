<template>
  <div id="login">
    <LoginT>
      <template #uname>
        <div id="unameBox">
          <input type="text" placeholder="手机号 / 邮箱" class="input" id="uname" v-if="isDefault" />
          <input
            type="text"
            placeholder="手机号"
            class="input"
            id="uname"
            v-if="!isDefault"
            :class="{isNum:!isDefault}"
          />
          <div id="phoneHeader" v-if="!isDefault">+86 |</div>
        </div>
      </template>
      <template #psw>
        <div id="pswBox">
          <input type="password" placeholder="密码" class="input" id="psw" v-if="isDefault" />
          <input type="password" placeholder="手机验证码" class="input" id="psw" v-if="!isDefault" />
          <div id="code" v-if="!isDefault">
            <p>获取验证码</p>
          </div>
        </div>
      </template>
      <template #otherlink>
        <div id="otherlink">
          <p id="olL">
            <span v-if="isDefault" @click="fn">免密码登录</span>
            <span v-if="isDefault">海外手机登录</span>
            <span v-if="!isDefault" @click="fn">账号密码登录</span>
          </p>
          <p id="olR" v-if="isDefault">找回密码</p>
          <p id="olR" v-if="!isDefault">验证码收不到？</p>
        </div>
      </template>
    </LoginT>
  </div>
</template>

<script>
import LoginT from "@/components/logintem";
export default {
  data() {
    return {
      isDefault: true,
    };
  },
  components: {
    LoginT,
  },
  methods: {
    fn() {
      this.isDefault = !this.isDefault;
    },
  },
};
</script>

<style>
</style>