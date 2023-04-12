<template>
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-info">
                <h1>SEM Campaigns Made Simple With Avada</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi harum porro facere cum temporibus
                    adipisci tempora.
                </span>
                <div class="hero-buttons">
                    <PrimaryButton :content="'buy awada now'" />
                    <SecondaryButton :content="'contact us'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';
import SecondaryButton from './SecondaryButton.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        PrimaryButton, SecondaryButton
    }
}
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

.hero-container {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    background-image: url('../img/1-hero-image.png');
    background-repeat: none;
    background-size: cover;

    .hero-content {
        width: 60%;
        margin: auto;

        .hero-info {
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            color: white;

            &>* {
                margin-bottom: 20px;
            }

            h1 {
                font-weight: 900;
            }

            span {
                font-size: 13px;
            }

            .hero-buttons {
                margin-bottom: 0;
                width: 100%;

                &>* {
                    margin-right: 15px;
                }
            }
        }
    }
}
</style>