<template>
    <div class="header-container">
        <img class="logo" src="../img/logo_seo_w_1x.png" alt="">
        <div class="nav-bar">
            <span v-for="link in navBar">{{ link }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navBar: Array
    }
}
</script>

<style scoped lang="scss">
.header-container {
    width: 60%;
    margin: auto;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: grey;

    .logo {
        height: 30px;
    }

    .nav-bar {
        span {
            padding-left: 15px;
            color: white;
            font-size: 14px;
        }
    }
}
</style>