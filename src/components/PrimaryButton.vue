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
}

span {
    padding: 8px 10px;
    background-color: $primary-color;
    border-radius: 20px;
    font-weight: 600;
}
</style>