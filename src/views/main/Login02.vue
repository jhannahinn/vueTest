<template lang="html">
<div class="Login02">
  <div class="LogoBox">
    <logo-text></logo-text>
  </div>
  <div class="InputView">
    <p>아이디</p>
    <edit-text placeHold="Id"></edit-text>
  </div>
  <div class="InputView">
    <p>비밀번호</p>
    <edit-text placeHold="*******"></edit-text>
  </div>
  <div class="LoginOptions">
    <button2 index="로그인"></button2>
    <div class="Line"></div>
    <p>아이디 또는 비밀번호 찾기</p>
    <p>아직 계정이 없으신가요? 회원가입</p>
  </div>
  <div class="GobackArrow">
    <img src="@/assets/loginArrow1.png" id="Arrow1">
    <img src="@/assets/loginArrow2.png" id="Arrow2">
  </div>
</div>
</template>

<script>
import { reactive } from "vue";
import LogoText from "@/components/asset/LogoText.vue";
import Button2 from "@/components/asset/Button2.vue";
import EditText from "@/components/asset/EditText.vue";

export default {
  components: {
    LogoText,
    Button2,
    EditText,
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
.Login02 {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
}
.LogoBox {
  display: flex;
  justify-content: center;
  margin-bottom: 9vh;
  margin-top: 9vh;
}
.InputView p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: flex-end;
  letter-spacing: 2px;
  margin: 0px 0px 10px 42px;

  color: #373a3c;
}
.InputView {
  margin-bottom: 4vh;
}
.LoginOptions {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-top: 1vh;
}
.Line {
  height: 2px;
  background: #cccccc;
  margin: 20px 31px 10px;
}
.LoginOptions p {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  margin: 5px 0px;

  color: #999999;
}
.LoginOptions a {
  text-decoration-line: underline;
  color: #B7825A;
}
.GobackArrow {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 16px;
  left: 16px;
}
.GobackArrow img {
  position: absolute;
}
#Arrow2 {
  top:8px;
}
</style>
