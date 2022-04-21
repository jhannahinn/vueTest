<template lang="html">
    <!-- <dash-board></dash-board> -->
    <!-- <login01></login01> -->
    <login02></login02>
</template>

<script>
// import DashBoard from "@/views/main/DashBoard.vue";
// import Login01 from "@/views/main/Login01.vue";
import Login02 from "@/views/main/Login02.vue";
import {reactive} from 'vue'

export default {
    components: {
        // DashBoard,
        // Login01,
        Login02,
    },
    setup(){
        const state = reactive({
            test : 'eeee'
        })


        return{
            state
        }
    }
};
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
.Title {
    position: static;
    height: 24px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    margin: 10px 10px 20px;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;

    color: #373A3C;
}
.AdView {
    background: #333333;
    border-radius: 4px;
    width: auto;
    height: 60px;
    margin: 0px 8px 0px;
}
.CalendarView {
    margin: 35px 11px 0px;
}
</style>
