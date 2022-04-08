<template lang="html">
    <div class="DailyCard">
        <div class="Date">
            7
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // variants: [
            //     {
            //         // 빈칸
            //         variantId: 2234,
            //         variantColor: "rgba(0, 0, 0, 0)",
            //     },
            //     {
            //         // 일정 있는 날
            //         variantId: 2235,
            //         variantColor: "rgba(0, 0, 0, 0)",
            //     },
            //     {
            //         // 일정 없는 날
            //         variantId: 2236,
            //         variantColor: "rgba(0, 0, 0, 0)",
            //     },
            //     {
            //         // 일정 넘친 날
            //         variantId: 2237,
            //         variantColor: "rgba(0, 0, 0, 0)",
            //     },
            //     {
            //         // 당일
            //         variantId: 2238,
            //         variantColor: "rgba(201, 170, 143, 0.5)",
            //     },
            // ]
            }
        },
    }
</script>

<style lang="css" scoped>
.DailyCard {
    display: flex;
    flex-direction: column;
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
    position: static;
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

</style>
