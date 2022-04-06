<template lang="html">
    <!-- <my-label></my-label> -->
    <timeout-label></timeout-label>
</template>

<script>
// import MyLabel from '../../components/asset/MyLabel.vue'
import TimeoutLabel from '../../components/asset/TimeoutLabel.vue'

export default {
    components: { 
        // MyLabel,
        TimeoutLabel 
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
