<template>
    <div class="header-container">
        <div class="header-content">
            <img class="logo" src="../img/logo_seo_w_1x.png" alt="">
            <div class="nav-bar">
                <span v-for="(link, index) in navBar" :key="index">
                    <span v-if="link == 'Get in touch now'">
                        <PrimaryButton :content="link" />
                    </span>
                    <span v-else-if="link == 'Careers'" :class="(index == selectedLink) ? 'selected' : ''">{{ link }}
                        <span class="apply-tag">APPLY</span> </span>
                    <span v-else :class="(index == selectedLink) ? 'selected' : ''">{{ link }}</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';
export default {
    data() {
        return {

        }
    },
    props: {
        navBar: Array,
        selectedLink: Number
    },
    components: {
        PrimaryButton
    }
}
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

.header-container {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}

.header-content {
    width: 60%;
    margin: auto;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .logo {
        height: 30px;
    }

    .nav-bar {
        .selected {
            color: $primary-color;
        }


        span {
            margin-left: 10px;
            color: white;
            font-size: 13px;
        }

        .apply-tag {
            border: $primary-color 1px solid;
            padding: 3px 5px;
            border-radius: 5px;
            color: $primary-color;
            margin-left: 2px;
            font-size: 10px;
        }
    }
}
</style>