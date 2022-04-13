<template lang="html">
    <div class="TimeoutLabel" @click="select">
        <div class="LabelContainer">
            {{ label }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            labelWidth: "",
            currentWidth: "",
            labelHeight: "",
            currentHeight: "",
            ifSelect: -1,
            }
        },
    props: {
        label: String
    },
    methods: {
        activate() {
            setTimeout(() => this.isHidden = false, 500);
        },
        cancelMask: function () {
            var self = this;
            setTimeout(() => {
                self.labelWidth = "60px";
            }, 500);
        },
        select: function() {
            this.ifSelect *= -1;
            console.log(this.ifSelect);
            // this.labelWidth = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width;
            this.currentWidth = window.getComputedStyle(document.getElementsByClassName("TimeoutLabel")[0]).width;
            // this.labelHeight = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).height;
            this.currentHeight = window.getComputedStyle(document.getElementsByClassName("TimeoutLabel")[0]).height;
            console.log("labelWidth: ", this.labelWidth);
            console.log("currentWidth: ", this.currentWidth);
            console.log("labelHeight: ", this.labelHeight);
            console.log("currentHeight: ", this.currentHeight);

            if(this.ifSelect == 1) {
                // console.log('labelWidth(1): ', this.labelWidth);
                setTimeout(function(){ 
                    document.getElementsByClassName("TimeoutLabel")[0].style.width = "auto";
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible";
                    self.labelWidth = window.getComputedStyle(document.getElementsByClassName("TimeoutLabel")[0]).width;
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                    // self.labelWidth 길이 가져옴
                    document.getElementsByClassName("TimeoutLabel")[0].style.width = self.labelWidth;
                    // console.log('labelWidth(2): ', self.labelWidth);
                    // console.log('Label Width: ', window.getComputedStyle(document.getElementsByClassName("Label")[0]).width );
                    // Label 길이 늘림
                    setTimeout(function(){ document.getElementsByClassName("LabelContainer")[0].style.visibility = "visible"; }, 200);
                    // LabelContainer
                    clearTimeout();
                    }, 10);
                    clearTimeout();
                }
            if(this.ifSelect == -1) { 
                setTimeout(function(){ 
                    self.labelWidth = window.getComputedStyle(document.getElementsByClassName("LabelContainer")[0]).width;
                    // self.labelWidth 길이 가져옴
                    document.getElementsByClassName("LabelContainer")[0].style.width = self.labelWidth;
                    document.getElementsByClassName("LabelContainer")[0].style.visibility = "hidden";
                    // Label 길이 유지하면서 LabelContainer 닫음
                    setTimeout(function(){ document.getElementsByClassName("TimeoutLabel")[0].style.width = "48px"; }, 150);
                    // Label 길이 줄임
                    }, 10);
                    clearTimeout();
                clearTimeout();
                }
        }
    }
}
</script>

<style lang="css" scoped>
.TimeoutLabel {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    min-width: 48px;
    width: 48px;
    height: 10px;
    left: 20px;
    top: 20px;


    background: #3192CA;
    border-radius: 4px;
}
.LabelContainer {
    display: flex;
    visibility: hidden;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;

    position: static;
    min-width: 48px;
    width: auto;
    left: 20px;
    top: 0px;

    background: #3192CA;
    border-radius: 4px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
}

</style>
