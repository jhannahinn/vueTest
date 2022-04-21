<template lang="html">
    <div class="LogoContainer">
      <img class="LogoImg" src="@/assets/logo.png" />
      <div class="LogoText">log your life</div>
    </div>
</template>

<script>
export default {
  components: {},
  data() {
      return {}
  },
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
img {
  width: 80px;
  height: 80px;
  margin: 0px 20px 0px;
}
.LogoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 120px;
    padding-top: 10px;
    margin: 0px;
}
.LogoText {
  /* width: 120px; */
  height: 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  margin: 10px 0px 10px;

  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;

  color: #c4c4c4;
}
</style>
