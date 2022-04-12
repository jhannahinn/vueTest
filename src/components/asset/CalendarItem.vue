<template lang="html">
    <div class="CalendarItem">
        <weekly-card></weekly-card>
        <weekly-card></weekly-card>
        <weekly-card></weekly-card>
        <weekly-card></weekly-card>
        <weekly-card></weekly-card>
        <weekly-card></weekly-card>
    </div>
</template>

<script>
import WeeklyCard from './WeeklyCard.vue'

export default {
    components: {
        WeeklyCard,
    },
    data() {
        return {

            }
        },
    }
</script>

<style lang="css" scoped>
.CalendarItem {
    display: flex;
    flex-direction: column;
    width: 280px;
}
.WeeklyCard {
    margin-bottom: 8px;
}

</style>
