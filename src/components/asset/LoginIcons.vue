<template>
  <div class="LoginIcons">
    <div class="LoginIcon">
      <div class="GoogleIcon">
        <img src="@/assets/googleIcon.png" />
      </div>
    </div>
    <div class="LoginIcon">
      <div class="NaverIcon">
        <img src="@/assets/naverIconGreen.png" />
      </div>
    </div>
    <div class="LoginIcon"></div>
    <div class="LoginIcon"></div>
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
.LoginIcons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.LoginIcon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #FFFFFF;
  border: 1px solid #EBECF0;
  margin: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.GoogleIcon {
  width: 20px;
  height: 20px;
}
.NaverIcon {
  width: 40px;
  height: 40px;
}
</style>