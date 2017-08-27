<template>
    <div id="path-bar-div">
        <div id="dark-box"></div>
        <div class="pattern">
            <div class="container">
                <div style="position:relative;">
                    <div class="pattern-upper"></div>
                    <div class="pattern-lower"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url("../../../styles/color.css");
#dark-box {
    height: 30px;
    background-color: var(--grey);
}
#path-bar-div {
    height: 70px;
    margin-bottom: 2rem;
    background-color: var(--grey);
}
.pattern-upper {
    height: 0;
    border-style: solid;
    border-width: 30px 30px 30px 30px;
    border-color: #fff transparent transparent transparent;
    position: relative;
    top: -0.32rem;
}
.pattern-lower {
    height: 0;
    border-style: solid;
    border-width: 30px 30px 30px 30px;
    border-color: var(--grey) transparent transparent transparent;
    top: -4.5rem;
    position: relative;
}
.pattern {
    border-top: 5px solid #fff;
}
</style>
