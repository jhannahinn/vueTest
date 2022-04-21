<template lang="html">
    <div class="Title">대시보드</div>
    <div class="AdView">Ad</div>
    <div class="CalendarView">
        <calendar></calendar>
    </div>
</template>

<script>
import Calendar from "@/components/asset/Calendar.vue";
import { reactive } from "vue";

export default {
  components: {
    Calendar,
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
.Title {
  position: static;
  height: 24px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  margin: 16px 16px 20px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;

  color: #373a3c;
}
.AdView {
  background: #333333;
  border-radius: 4px;
  width: auto;
  height: 60px;
  margin: 0px 16px 0px;
}
.CalendarView {
  margin: 35px 21px 0px;
}
</style>
