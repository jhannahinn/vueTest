<template lang="html">
    <!-- <my-label></my-label> -->
    <timeout-label label="timeoutlabel"></timeout-label>
    <animation-label></animation-label>
    <main-container
        title-index="수학"
        description-index="수학 현우진T 강의 15강 보기"
        hour="01"
        minute="33"
        second="27"
        start-date="2022.04.07"
        end-date="2022.04.08"
    ></main-container>
    <calendar></calendar>
</template>

<script>
// import MyLabel from '../../components/asset/MyLabel.vue'
import TimeoutLabel from "../../components/asset/TimeoutLabel.vue";
import AnimationLabel from "../../components/asset/AnimationLabel.vue";
import MainContainer from "../../components/asset/MainContainer.vue";
import Calendar from "../../components/asset/Calendar.vue";

export default {
    components: {
        // MyLabel,
        TimeoutLabel,
        AnimationLabel,
        MainContainer,
        Calendar,
    },
    data() {
        return {};
    },
};
</script>

<style lang="css" scoped></style>
