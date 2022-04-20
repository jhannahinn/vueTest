<template lang="html">
    <div class="CalendarItem">
        <div class="Week">
            <daily-card :date="cel[0]"></daily-card>
            <daily-card :date="cel[1]"></daily-card>
            <daily-card :date="cel[2]"></daily-card>
            <daily-card :date="cel[3]"></daily-card>
            <daily-card :date="cel[4]"></daily-card>
            <daily-card :date="cel[5]"></daily-card>
            <daily-card :date="cel[6]"></daily-card>
        </div>
        <div class="Week">
            <daily-card :date="cel[7]"></daily-card>
            <daily-card :date="cel[8]"></daily-card>
            <daily-card :date="cel[9]"></daily-card>
            <daily-card :date="cel[10]"></daily-card>
            <daily-card :date="cel[11]"></daily-card>
            <daily-card :date="cel[12]"></daily-card>
            <daily-card :date="cel[13]"></daily-card>
        </div>
        <div class="Week">
            <daily-card :date="cel[14]"></daily-card>
            <daily-card :date="cel[15]"></daily-card>
            <daily-card :date="cel[16]"></daily-card>
            <daily-card :date="cel[17]"></daily-card>
            <daily-card :date="cel[18]"></daily-card>
            <daily-card :date="cel[19]"></daily-card>
            <daily-card :date="cel[20]"></daily-card>
        </div>
        <div class="Week">
            <daily-card :date="cel[21]"></daily-card>
            <daily-card :date="cel[22]"></daily-card>
            <daily-card :date="cel[23]"></daily-card>
            <daily-card :date="cel[24]"></daily-card>
            <daily-card :date="cel[25]"></daily-card>
            <daily-card :date="cel[26]"></daily-card>
            <daily-card :date="cel[27]"></daily-card>
        </div>
        <div class="Week">
            <daily-card :date="cel[28]"></daily-card>
            <daily-card :date="cel[29]"></daily-card>
            <daily-card :date="cel[30]"></daily-card>
            <daily-card :date="cel[31]"></daily-card>
            <daily-card :date="cel[32]"></daily-card>
            <daily-card :date="cel[33]"></daily-card>
            <daily-card :date="cel[34]"></daily-card>
        </div>
        <div class="Week">
            <daily-card :date="cel[35]"></daily-card>
            <daily-card :date="cel[36]"></daily-card>
            <daily-card :date="cel[37]"></daily-card>
            <daily-card :date="cel[38]"></daily-card>
            <daily-card :date="cel[39]"></daily-card>
            <daily-card :date="cel[40]"></daily-card>
            <daily-card :date="cel[41]"></daily-card>
        </div>
    </div>
</template>

<script>
import DailyCard from "./DailyCard.vue";
// import onMounted from 'vue';

export default {
    name: "CalendarItem",
    props: {
        yyyy: Number,
        mm: Number,
    },
    components: {
        DailyCard,
    },
    data() {
        return {
            cel: [0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0],
            monthMax: [31, 28, 31, 30, 31, 30,
                    31, 31, 30, 31, 30, 31],
            leapYear: false,
        };
    },
    // setup() {
    //     onMounted(() => {
    //         let totalDays = 0;
    //         if (this.mm == (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
    //             totalDays = 31;
    //         } else if (this.mm == (4 || 6 || 9 || 11)) {
    //             totalDays = 30;
    //         } // 아래부터 2월, 윤년 계산
    //         else if (this.yyyy % 400 == 0) {
    //             totalDays = 29;
    //         } else if (this.yyyy % 100 != 0 && this.yyyy % 4 == 0) {
    //             totalDays = 29;
    //         } else {
    //             totalDays = 28;
    //         }

    //         console.log(totalDays);
    //     });
    // },
    // vue3 문법으로 변환해야 함 (저거만 하면 안먹힘)
    mounted() {
        // 1-12월만 Calendar 에서 받아옴 (예외 거기서)
        if (this.yyyy % 400 == 0) {
            this.leapYear = true;
        } else if (this.yyyy % 100 != 0 && this.yyyy % 4 == 0) {
            this.leapYear = true;
        }

        if (this.leapYear == true) { this.monthMax[1] = 29; }

        var totalDays = this.monthMax[this.mm - 1];

        // 2020년 1월 기준 (1일 수요일)
        // 윤년 계산 2099년까지만 (4년마다)

        // 같은 년도 1월까지 맞추기
        var setYear = 2020;
        var setDay = 3;
        while (this.yyyy > setYear) {
            if (setYear % 4 == 0) {
                setDay += 2;
            } else {
                setDay += 365;
            }
            setYear++;
        }
        if (setDay > 6) { setDay = setDay % 7; }

        // 월 맞추기
        for (var i = 0; i < this.mm - 1; i++) {
            setDay += this.monthMax[i];
        }
        if (setDay > 6) { setDay = setDay % 7; }

        // 표시
        for (var j = 0; j < totalDays; j++) {
            this.cel[setDay + j] = j + 1;
        }
    }
};
</script>

<style lang="css" scoped>
.CalendarItem {
    display: flex;
    flex-direction: column;
    /* min-width: 280px; */
}
.Week {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>
