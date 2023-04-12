<template>
    <div class="header-container">
        <div class="header-content">
            <img class="logo" src="../img/logo_seo_w_1x.png" alt="">
            <div class="nav-bar">
                <span v-for="(link, index) in navBar" :key="index" :class="(index == selectedLink) ? 'selected' : ''">{{
                    link }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navBar: Array,
        selectedLink: Number
    }
}
</script>

<style scoped lang="scss">
.header-container {
    //position: fixed;
    width: 100%;
    top: 0;
    left: 0;
}

.header-content {
    width: 60%;
    margin: auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4c235b;


    .logo {
        height: 30px;
    }

    .nav-bar {
        .selected {
            color: orange;
        }

        span {
            padding-left: 15px;
            color: white;
            font-size: 14px;
        }
    }
}
</style>