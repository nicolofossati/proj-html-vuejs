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
    <!-- Il terzo tipo di Card (bianco) PLANS section-->
    <div class="card" id="third-card" v-else>
        <h4>{{ title }}</h4>
        <div class="price-container">
            <span class="dollar">$</span>
            <span class="price">{{ price }}</span>
            <div class="rigth-price">
                <span class="cents">99</span>
                <span class="montly">montly</span>
            </div>
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

    .price-container {
        display: flex;
        justify-content: center;
        font-weight: 900;

        .dollar {
            padding-top: 5px;
        }

        .price {
            font-size: 30px;
            color: $violet-text;
            justify-items: center;
        }

        .rigth-price {
            display: flex;
            flex-direction: column;
            padding-top: 5px;
        }

        .cents {
            padding: 0;
            align-self: start;
            color: $violet-text;
        }

        .montly {
            align-self: end;
            font-style: italic;
            font-size: 10px;
        }
    }

}
</style>