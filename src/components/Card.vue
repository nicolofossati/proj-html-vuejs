<!-- Bottone arancione -->
<template>
    <!-- Il primo tipo di Card (bianco)-->
    <div class="card" id="first-card" v-if="cardtype == 'first'">
        <i v-if="icon == 'google'" :class="'fa-brands fa-' + icon"></i>
        <i v-else :class="'fa-solid fa-' + icon"></i>
        <h4>{{ title }}</h4>
        <span>{{ content }}</span>
    </div>
    <!-- Il secondo tipo di Card (blu)-->
    <div class="card" id="second-card" v-else-if="cardtype == 'second'">
        <i v-if="icon == 'google'" :class="'fa-brands fa-' + icon"></i>
        <i v-else :class="'fa-solid fa-' + icon"></i>
        <h4>{{ title }}</h4>
        <span>{{ content }}</span>
        <span class="read-more">Read More ></span>
    </div>
    <!-- Il primo tipo di Card (bianco)-->
    <div class="card" id="third-card" v-else>
        <i v-if="icon == 'google'" :class="'fa-brands fa-' + icon"></i>
        <i v-else :class="'fa-solid fa-' + icon"></i>
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
        cardtype: String
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

#second-card {
    background-color: $secondary-light-color;
    margin: 10px;
    color: white;

    .read-more {
        padding-top: 15px;
        display: block;
        color: $primary-color;
    }

}
</style>