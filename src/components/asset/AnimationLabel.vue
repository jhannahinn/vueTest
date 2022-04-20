<template lang="html">
    <div class="AnimationLabel" @click="select, (show = !show)">
        <div class="Label"></div>
        <div class="LabelContainer">
            {{ label }}
        </div>
    </div>
</template>

<script>
import { openLabel } from "./animateLabel.js";
import { closeLabel } from "./animateLabel.js";

export default {
    mounted() {
        // 여기에서 라벨 width 값 받아 저장
        this.labelAuto = window.getComputedStyle(
            document.getElementsByClassName("AnimationLabel")[0]
        ).width;
    },
    data() {
        return {
            labelAuto: "",
            ifSelect: -1,
            show: false,
        };
    },
    props: {
        label: String,
    },
    methods: {
        select: function () {
            this.ifSelect *= -1;
            console.log(this.ifSelect);

            if (this.ifSelect == 1) {
                document.getElementsByClassName(
                    "LabelContainer"
                )[0].style.visibility = "visible";
                openLabel(this.$refs.LabelContainer);
            }

            if (this.ifSelect == -1) {
                document.getElementsByClassName(
                    "LabelContainer"
                )[0].style.visibility = "hidden";
                closeLabel(this.$refs.LabelContainer);
            }
        },
    },
};
</script>

<style lang="css" scoped>
.AnimationLabel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: static;
    min-width: 48px;
    width: 48px;
    height: 10px;

    background: #3192ca;
    border-radius: 4px;
}
.LabelContainer {
    visibility: hidden;
    align-items: flex-start;
    padding: 10px;

    position: static;
    width: auto;
    left: 20px;
    top: 0px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #ffffff;
}
</style>
