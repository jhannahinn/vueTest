<template lang="html">
    <div class="MainContainer">
        <div class="Title">
            {{ titleIndex }}
        </div>
        <div class="Description">
            {{ descriptionIndex }}
        </div>
        <div class="Time">
            {{ hour }} : {{ minute }} : {{ second }}
        </div>
        <div class="Date">
            {{ startDate }} ~ {{ endDate }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleIndex: String,
        descriptionIndex: String,
        hour: String,
        minute: String,
        second: String,
        startDate: String,
        endDate: String,
    },
    data() {
        return {

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
.Title {
    position: static;
    width: 202px;
    height: 18px;
    /* left: 20px; */
    /* top: 38.5px; */

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #373A3C;


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 9px 0px;
}
.Description {
    position: static;
    width: 202px;
    height: 18px;
    left: 20px;
    top: 74.5px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #797979;


    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 9px 0px;
}
.Time {
    position: static;
    width: 174px;
    height: 18px;
    left: 28px;
    top: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #222222;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 9px;
    margin-left: 28px;
}
.Date {
        position: static;
    width: 202px;
    height: 18px;
    left: 28px;
    top: 0px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */

    display: flex;
    align-items: center;
    letter-spacing: 0.05em;

    color: #222222;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 9px 0px;
}

</style>
