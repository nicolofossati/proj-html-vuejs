<template>
    <div class="main-container">
        <section class="meet">
            <div class="meet-content">
                <div class="section-info">
                    <h3>Meet The New Agency SEO Template From The Avada Team</h3>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam pariatur consectetur quae.
                        Velit!</span>
                </div>
                <div class="card-container">
                    <Card :cardtype="'first'" :icon="'road'" :title="'Estabilish Goals'"
                        :content="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sed voluptates provident quamtempore illo culpa exercitationem nisi.'" />
                    <Card :cardtype="'first'" :icon="'video'" :title="'Work With a Team'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias enim temporibus id totam cumque nesciunt, obcaecati impedit.'" />
                    <Card :cardtype="'first'" :icon="'droplet'" :title="'Get Results'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad suscipit quasi recusandae odit! Voluptatibus itaque sed debitis eaque!'" />

                </div>
                <img src="../img/agency-seo-desk-front-800x380.jpg" alt="">
            </div>
        </section>
        <section class="services">
            <div class="services-content">
                <div class="section-info">
                    <h3>See Our Top Notch Services</h3>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, saepe.</span>
                </div>
                <div class="card-container">
                    <Card :cardtype="'second'" :icon="'google'" :title="'Google SEO'"
                        :content="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sed voluptates provident quamtempore illo culpa exercitationem nisi.'" />
                    <Card :cardtype="'second'" :icon="'gear'" :title="'Work With a Team'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias enim temporibus id totam cumque nesciunt, obcaecati impedit.'" />
                    <Card :cardtype="'second'" :icon="'building'" :title="'Get Results'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad suscipit quasi recusandae odit! Voluptatibus itaque sed debitis eaque!'" />
                    <Card :cardtype="'second'" :icon="'chart-bar'" :title="'Get Results'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad suscipit quasi recusandae odit! Voluptatibus itaque sed debitis eaque!'" />

                </div>
            </div>
        </section>
        <section class="work">
            <div class="work-content">
                <div class="section-info">
                    <h3>Our Work</h3>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, qui!</span>
                </div>
                <div class="card-container work-img-container">
                    <img src="../img/case-study-gallery-3-1-400x300.jpg" alt="">
                    <img src="../img/case-study-gallery-2-400x300.jpg" alt="">
                    <img src="../img/case-study-gallery-1-1-400x300.jpg" alt="">
                    <img src="../img/case-study-gallery-4-1-400x300.jpg" alt="">
                    <img src="../img/case-study-gallery-5-1-400x300.jpg" alt="">
                    <img src="../img/case-study-gallery-6-1-400x300.jpg" alt="">
                </div>
                <div class="button-container">
                    <PrimaryButton :content="'view our work'" />
                </div>
            </div>
        </section>
        <section class="plans">
            <div class="plans-content">
                <div class="section-info">
                    <h3>Our Plans</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur maiores labore, eaque
                        asperiores perferendis ipsam.</span>
                </div>
                <div class="card-container">
                    <Card :cardtype="'third'" :title="'Standard'" :price="'19'" :project="'5'" :gigabyte="'5 GB'" />
                    <Card :cardtype="'third'" :title="'Premium'" :price="'19'" :project="'5'" :gigabyte="'5 GB'" />
                    <Card :cardtype="'third'" :title="'Professional'" :price="'19'" :project="'5'" :gigabyte="'5 GB'" />
                    <Card :cardtype="'third'" :title="'Extreme'" :price="'19'" :project="'5'" :gigabyte="'5 GB'" />
                </div>
            </div>
        </section>
        <section class="news">
            <div>
                <h3>Our News</h3>
                <span>Lorem ipsum</span>
                <div class="card-container">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </section>
        <section class="reviews">
            <div>
                <h3>What Our Clients Say</h3>
                <img src="" alt="">
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, laboriosam.</span>
                <span><span>Luis Desalvo, </span>CREO TECH</span>
                <div class="card-container">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </section>
        <section class="contact-us">
            <div>
                <h3>Start Tour Free Concultation</h3>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae!</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }, components: {
        Card, PrimaryButton
    }
}

import PrimaryButton from './PrimaryButton.vue';
import Card from './Card.vue';
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

.main-container {



    section {
        padding-top: 40px;
        text-align: center;

        &:nth-child(2n+1) {
            background-color: $primary-bg-color;
        }

        &>div {
            width: 60%;
            margin: auto;
        }


        .section-info {
            width: 50%;
            margin: auto;

            h3 {
                padding-bottom: 20px;
            }
        }
    }

    .card-container {
        display: flex;
        flex-direction: row;
        padding-top: 40px;

        .card {
            width: calc(100% /3 - 20px);
            margin: 10px;
        }
    }



    .meet {
        img {
            display: block;
        }
    }

    .services {
        background-color: $secondary-color;
        color: white;
        padding: 50px 0;
    }


    .work-img-container {
        flex-wrap: wrap;

        img {
            width: calc(100% /3 - 20px);
            margin: 10px;
        }
    }

    .plans {
        background-image: url('../img/background1.jpg');
        background-size: cover;
        height: 500px;
    }

    .button-container {
        padding: 30px 0 50px 0;
    }
}
</style>