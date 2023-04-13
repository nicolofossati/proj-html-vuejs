<template>
    <div class="footer-container">
        <img class="logo" src="../img/logo_seo_1x.png" alt="">

        <div class="nav-bar">
            <span v-for="(link, index) in navBar" :key="index" :class="(index == selectedLink) ? 'selected' : ''">{{
                link }}</span>
        </div>

        <div class="copyright">
            <span>©Copyright 2012-2020 | Avada Theme by <span class="emphasized">ThemeFision</span> | All rights Reserved |
                Powered by <span class="emphasized">WordPress</span></span>
        </div>

        <div class="social">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
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
@use "../styles/colors.scss" as *;

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $grey-text;

    .logo {
        width: 150px;
        padding: 40px 0;
    }

    .copyright {

        font-size: 13px;

        .emphasized {
            color: black;
            font-weight: 600;
        }
    }

    .nav-bar {
        padding-bottom: 40px;

        .selected {
            color: $primary-color;
        }

        span {
            padding-left: 30px;
            font-size: 14px;
            font-weight: 600;
        }
    }

    .social {
        padding: 20px 0;

        i {
            font-size: 25px;
            padding: 0 15px;
        }
    }
}
</style>