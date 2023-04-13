<!-- Bottone arancione -->
<template>
    <a href="#"><span>{{ content.toUpperCase() }}</span></a>
</template>

<script>
export default {
    props: {
        content: String,
    }
}
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

a {
    text-decoration: none;
    color: white;
    display: inline-block;
}

span {
    padding: 8px 15px;
    background-color: $primary-color;
    border-radius: 20px;
    font-weight: 700;
    font-size: 10px;
}
</style>