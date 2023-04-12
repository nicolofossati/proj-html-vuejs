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
        <h4>{{ title }}</h4>
        <div class="price-container">
            <span>{{ price }}</span>
        </div>
        <span class="poject">{{ project }} Projects</span>
        <span class="storage">{{ gigabyte }} Storage</span>
        <span class="users">Unlimited Users</span>
        <TertiaryButton :content="'start today'" v-if="title != 'Professional'" />
        <PrimaryButton :content="'start today'" v-else />
    </div>
</template>

<script>
export default {
    props: {
        icon: String,
        title: String,
        content: String,
        cardtype: String,
        price: String,
        project: String,
        gigabyte: String
    }, components: {
        PrimaryButton, TertiaryButton
    }
}

import PrimaryButton from './PrimaryButton.vue';
import TertiaryButton from './TertiaryButton.vue';
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

#third-card {
    width: 100%;
    background-color: white;
    margin: 10px;
    color: $grey-text;

    h4 {
        color: black;
    }

    &>span {
        display: block;
    }

}
</style>