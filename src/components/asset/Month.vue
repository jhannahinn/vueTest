<template lang="html">
    <div class="Month">
        <div class="Rectangles">
            <div class="Rectangle1"></div>
            <div class="Rectangle2"></div>
            <div class="Rectangle3"></div>
        </div>
        <div class="Year">
            {{ yyyy }}
        </div>
        <div class="Date">
            {{ mm }}
        </div>
        <div class="Date">
            {{ dd }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            yyyy: "2022",
            mm: "01",
            dd: "27",
            }
        },
    }
</script>

<style lang="css" scoped>
.MainContainer {
    display: flex;
    flex-direction: column;

    width: 202px;
    padding: 29.5px 20px;
}
.Month {
    position: static;
    height: 24px;
    left: 34px;
    top: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    display: flex;
    flex-direction: row;
    align-items: center;

    color: #373A3C;
}
.Rectangles {
    position: flex;
    flex-direction: column;
    margin-right: 15px;
}
.Rectangle1 {
    position: flex;
    width: 14px;
    height: 1.77px;
    margin-bottom: 4.34px;

    background: #373A3C;
}
.Rectangle2 {
    position: flex;
    width: 8.67px;
    height: 1.77px;
    margin-bottom: 4.34px;

    background: #373A3C;
}
.Rectangle3 {
    position: flex;
    width: 5.33px;
    height: 1.77px;

    background: #373A3C;
}
.Year {
    position: static;
    width: 43px;
    height: 24px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    align-items: center;
    text-align: center;

    color: #373A3C;
}
.Date {
    position: static;
    width: 22px;
    height: 24px;

    margin-left: 10px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    align-items: center;
    text-align: center;

    color: #373A3C;
}

</style>
