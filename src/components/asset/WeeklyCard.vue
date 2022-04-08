<template lang="html">
    <div class="WeeklyCard">
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
        <div class="DailyCard">
            <div class="Date">
                7
            </div>
            <div class="ToDo">
                9
            </div>
        </div>
    </div>
</template>

<script>

export default {
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

    width: auto;
    height: 52px;
}
.DailyCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 40px;
    height: 52px;

    border-radius: 4px;

    background: rgba(201, 170, 143, 0.5);
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
    position: static;
    height: 22px;

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

</style>
