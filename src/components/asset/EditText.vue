<template>
  <div class="EditText">
    <input class="EditTextInput" v-model="inputMessage" :placeholder="placeHold" @keydown.enter="deleteInput" />
    <div class="EditTextCircle" @click="deleteInput(input)">
      <img src="@/assets/xIcon.png" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: String,
    placeHold: {
      type: String,
      required: false,
      default: "Edit Text",
    }
  },
  data() {
    return {
      imputMessage: "",
    };
  },
  methods: {
    deleteInput(event) {
      event.target.value = '';
      console.log("deleted");
    },
    deleteInputByButton() {
      this.inputMessage = '';
      console.log("this");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
.EditText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 17px;
  margin: 0px 32px;

  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  border-radius: 6px;
}
.EditTextCircle {
  width: 16px;
  min-width: 16px;
  height: 16px;
  border-radius: 100%;
  background: #CCCCCC;
  position: relative;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.EditTextCircle img {
  width: 8px;
  height: 8px;
}
.EditTextInput {
  border: none;
  height: 40px;
  min-width: 20vw;
  justify-items: center;
  align-items: center;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* identical to box height, or 189% */

  letter-spacing: 1px;

  color: #000000;
}
.EditTextInput::placeholder {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 189% */

  letter-spacing: 1px;
  text-transform: capitalize;

  color: #CCCCCC;
}
</style>