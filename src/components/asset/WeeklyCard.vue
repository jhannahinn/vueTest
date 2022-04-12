<template lang="html">
    <div class="WeeklyCard">
        <daily-card></daily-card>
        <daily-card></daily-card>
        <daily-card></daily-card>
        <daily-card></daily-card>
        <daily-card></daily-card>
        <daily-card></daily-card>
        <daily-card></daily-card>
    </div>
</template>

<script>
import DailyCard from '../../components/asset/DailyCard.vue'

export default {
    components: {
        DailyCard,
    },
    data() {
        return {

            }
        },
    }
</script>

<style lang="css" scoped>
.WeeklyCard {
    display: flex;
    flex-direction: row;
    /* position: absolute 해제하니까 Calendar랑 안 겹침 */

    width: 280px;
    height: 52px;
}

</style>
