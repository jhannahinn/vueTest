<template lang="html">
    <!-- <my-label></my-label> -->
    <timeout-label></timeout-label>
    <!-- <animation-label></animation-label> -->
    <main-container></main-container>
    <month></month>
    <daily-card></daily-card>
</template>

<script>
// import MyLabel from '../../components/asset/MyLabel.vue'
import TimeoutLabel from '../../components/asset/TimeoutLabel.vue'
// import AnimationLabel from '../../components/asset/AnimationLabel.vue'
import MainContainer from '../../components/asset/MainContainer.vue'
import Month from '../../components/asset/Month.vue'
import DailyCard from '../../components/asset/DailyCard.vue'

export default {
    components: { 
        // MyLabel,
        TimeoutLabel,
        // AnimationLabel,
        MainContainer,
        Month,
        DailyCard,
        },
    data() {
        return {
            
            }
        }
    // return 내용 싹 비우고 components: { MyLabel }만 살려두면 됨
}
</script>

<style lang="css" scoped>

</style>
