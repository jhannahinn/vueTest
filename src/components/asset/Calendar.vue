<template lang="html">
    <div class="Calendar">
        <month
            :yyyy="yyyyCal"
            :mm="mmCal"></month>
        <div class="Weekdays">
            <div class="Sun">sun</div>
            <div class="Mon">mon</div>
            <div class="Tue">tue</div>
            <div class="Wed">wed</div>
            <div class="Thu">thu</div>
            <div class="Fri">fri</div>
            <div class="Sat">sat</div>
        </div>
        <calendar-item
            :yyyy="yyyyCal"
            :mm="mmCal"></calendar-item>
    </div>
</template>

<script>
import Month from '@/components/asset/Month.vue'
import CalendarItem from '@/components/asset/CalendarItem.vue'

export default {
    name: "Calendar",
    components: {
        Month,
        CalendarItem,
    },
    props: {
    },
    data() {
        return {
            yyyyCal: 2022,
            mmCal: 3,
            }
        },
    }
</script>

<style lang="css" scoped>
.Calendar {
    min-width: 280px;
    max-width: 600px;
}
.Weekdays {
    display: flex;
    flex-direction: row;
    /* min-width, max-width Calendar class 속성 따름 */

    margin-top: 30px;
    margin-bottom: 12px;
    justify-content: space-around;
}
.Sun, .Mon, .Tue, .Wed, .Thu, .Fri, .Sat {
    position: static;
    width: 40px;
    height: 16px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 16px;
    text-transform: uppercase;
    /* identical to box height, or 160% */

    align-items: center;
    text-align: center;

    color: #373A3C;
}
.Sun {
    color: #C9AA8F;
}
.Month {
    margin-left: 5px;
}

</style>
