<template lang="html">
    <div class="DailyCard">
        <!-- DailyCard class 내에 5가지 class 생성 -->
        <!-- variants 사용하는 쪽으로 추후 수정 (공부하겠습니다...) -->

        <div class="IsToday" v-if="ifToday()"></div>

        <div>
            <div class="Empty" v-if="date == 0">
                <!-- 빈칸 -->
            </div>
            <div class="NothingToDo" v-else-if="toDo == 0">
                <!-- 일정 없는 날 -->
                <div class="Date">
                    {{ date }}
                </div>
            </div>
            <div class="SomethingToDo" v-else-if="toDo < 10">
                <!-- 일정 있는 날 (9개 이하) -->
                <div class="Date">
                    {{ date }}
                </div>
                <div class="ToDo">
                    <div class="Rectangles">
                        <div class="Rectangle1"></div>
                        <div class="Rectangle2"></div>
                        <div class="Rectangle3"></div>
                    </div>
                    <div class="Number">
                        {{ toDo }}
                    </div>
                </div>
            </div>
            <div class="OverToDo" v-else>
                <!-- 일정 넘친 날 -->
                <div class="Date">
                    {{ date }}
                </div>
                <div class="ToDo">
                    <div class="Rectangles">
                        <div class="Rectangle1"></div>
                        <div class="Rectangle2"></div>
                        <div class="Rectangle3"></div>
                    </div>
                    <div class="Number">
                        9
                    </div>
                    <div class="Plus">
                        +
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            date: 27,
            toDo: 9,
            today: 26, // 오늘 날짜인지 확인 -> 배경색 변경 용도
            }
        },
    methods: {
        ifToday() {
            if(this.date == this.today) { return true; }
            else { return false; }
        }
    },
    }
</script>

<style lang="css" scoped>
.DailyCard {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: static;
    width: 40px;
    height: 52px;

    border-radius: 4px;

    background: none;
}
.IsToday {
    width: 40px;
    height: 52px;
    border-radius: 4px;

    background: rgba(201, 170, 143, 0.5);

    position: absolute;
    z-index: -1;
}
.Date {
    position: static;
    width: 40px;
    height: 30px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #373A3C;
}
.ToDo {
    position: flex;
    flex-direction: row;
    height: 16px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #797979;
}
.Rectangles {
    position: flex;
    flex-direction: column;
    margin-left: 9px;
    margin-right: 10px;
}
.Rectangle1 {
    position: flex;
    width: 6px;
    height: 0.76px;
    margin-bottom: 1.86px;

    background: #797979;
}
.Rectangle2 {
    position: flex;
    width: 3.72px;
    height: 0.76px;
    margin-bottom: 1.86px;

    background: #797979;
}
.Rectangle3 {
    position: flex;
    width: 2.28px;
    height: 0.76px;

    background: #797979;
}
.Number {
    position: flex;
    width: 7px;
    height: 16px;
    left: 25px;
    top: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;

    color: #797979;
}
.Plus {
    position: static;
    width: 4px;
    height: 16px;
    left: 32px;
    top: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 6px;
    line-height: 16px;
    /* identical to box height, or 267% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #797979;
}

</style>
