<!-- Bottone bianco -->
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
    color: $grey-text;
    display: inline-block;
}

span {
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 10px;
    border: $grey-text 1px solid;
}
</style>