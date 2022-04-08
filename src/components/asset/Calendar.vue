<template lang="html">
    <div class="Calender">
        <month></month>
    </div>
</template>

<script>
import Month from '../../components/asset/Month.vue'

export default {
    components: {
        Month,
    },
    data() {
        return {
            
            }
        },
    }
</script>

<style lang="css" scoped>
.Calendar {
    display: flex;
    position: static;
}

</style>
