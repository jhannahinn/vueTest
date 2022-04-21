<template>
  <div class="SigninButton">
    <div class="SigninText">신규 회원가입</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.SigninButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  margin: 0px 32px 0px;

  background: #EBECF0;
  border-radius: 6px;
}
.SigninText {
  position: static;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 36px;
  /* identical to box height, or 200% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 2px;
  color: #55595C;
}
</style>