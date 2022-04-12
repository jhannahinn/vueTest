<template lang="html">
    <!-- <my-label></my-label> -->
    <timeout-label></timeout-label>
    <!-- <animation-label></animation-label> -->
    <main-container></main-container>
    <calendar></calendar>
</template>

<script>
// import MyLabel from '../../components/asset/MyLabel.vue'
import TimeoutLabel from '../../components/asset/TimeoutLabel.vue'
// import AnimationLabel from '../../components/asset/AnimationLabel.vue'
import MainContainer from '../../components/asset/MainContainer.vue'
import Calendar from '../../components/asset/Calendar.vue'

export default {
    components: { 
        // MyLabel,
        TimeoutLabel,
        // AnimationLabel,
        MainContainer,
        Calendar,
        },
    data() {
        return {
            
            }
        }
}
</script>

<style lang="css" scoped>

</style>
