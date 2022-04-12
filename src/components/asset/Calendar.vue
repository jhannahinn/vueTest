<template lang="html">
    <div class="Calendar">
        <month></month>
        <div class="Weekdays">
            <div class="Sun">sun</div>
            <div class="Mon">mon</div>
            <div class="Tue">tue</div>
            <div class="Wed">wed</div>
            <div class="Thu">thu</div>
            <div class="Fri">fri</div>
            <div class="Sat">sat</div>
        </div>
        <calendar-item></calendar-item>
    </div>
</template>

<script>
import Month from '../../components/asset/Month.vue'
import CalendarItem from '../../components/asset/CalendarItem.vue'

export default {
    components: {
        Month,
        CalendarItem,
    },
    data() {
        return {

            }
        },
    }
</script>

<style lang="css" scoped>
.Weekdays {
    display: flex;
    flex-direction: row;
    width: 280px;

    margin-top: 30px;
    margin-bottom: 12px;
    justify-content: space-around;
    /* 미묘하게 다른데 반응형이면 필요할 듯 */
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
