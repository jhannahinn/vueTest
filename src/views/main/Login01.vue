<template lang="html">
<div class="Login01">
  <div class="LogoBox">
    <logo-text></logo-text>
  </div>
  <div class="Buttons">
    <button2 index="로그인"></button2>
    <signin-button></signin-button>
  </div>
  <div class="Icons">
    <login-icons></login-icons>
  </div>
</div>
</template>

<script>
import { reactive } from "vue";
import LogoText from "@/components/asset/LogoText.vue";
import Button2 from "@/components/asset/Button2.vue";
import SigninButton from "@/components/asset/SigninButton.vue";
import LoginIcons from "@/components/asset/LoginIcons.vue";

export default {
  components: {
    LogoText,
    Button2,
    SigninButton,
    LoginIcons,
  },
  setup() {
    const state = reactive({
      test: "eeee",
    });

    return {
      state,
    };
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.Login01 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  height: 100vh;
}
.LogoBox {
  display: flex;
  justify-content: center;
  margin-bottom: 13vh;
}
.Buttons {
  display: flex;
  flex-direction: column;
  height: 108px;
  justify-content: space-between;

  margin-bottom: 7vh;
}
</style>
