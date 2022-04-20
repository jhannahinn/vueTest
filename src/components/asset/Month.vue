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
            {{ tempMM }}
        </div>
        <div class="Date">
            {{ tempDD }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Month",
    props: {
        yyyy: Number,
        mm: Number,
        dd: Number,
    },
    data() {
        return {
            tempMM: this.mm,
            tempDD: this.dd,
        };
    },
    mounted() {
        if (this.mm < 10) {
            this.tempMM = "0" + this.mm;
        } else {
            this.tempMM = this.mm;
        }

        if (this.dd < 10) {
            this.tempDD = "0" + this.dd;
        } else if (this.dd < 1) {
            this.tempDD = "";
        } else {
            this.tempDD = this.dd;
        }
    },
};
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

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    display: flex;
    flex-direction: row;
    align-items: center;

    color: #373a3c;
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

    background: #373a3c;
}
.Rectangle2 {
    position: flex;
    width: 8.67px;
    height: 1.77px;
    margin-bottom: 4.34px;

    background: #373a3c;
}
.Rectangle3 {
    position: flex;
    width: 5.33px;
    height: 1.77px;

    background: #373a3c;
}
.Year {
    position: static;
    width: 43px;
    height: 24px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    align-items: center;
    text-align: center;

    color: #373a3c;
}
.Date {
    position: static;
    width: 22px;
    height: 24px;

    margin-left: 10px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    align-items: center;
    text-align: center;

    color: #373a3c;
}
</style>
