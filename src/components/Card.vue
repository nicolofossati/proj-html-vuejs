<!-- Bottone arancione -->
<template>
    <div class="card">
        <i :class="'fa-solid fa-' + icon"></i>
        <h4>{{ title }}</h4>
        <span>{{ content }}</span>
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        content: String,
    }
}
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

.card {
    padding: 20px;

    i {
        font-size: 23px;
        color: $primary-color;
        padding-bottom: 20px;
    }

    h4 {
        font-size: 17px;
        padding-bottom: 15px;
    }

    span {
        font-size: 13px;
        padding-bottom: 20px;
    }
}
</style>