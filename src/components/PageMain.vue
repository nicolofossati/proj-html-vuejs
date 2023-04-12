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
                    <Card :cardtype="'third'" :title="'Premium'" :price="'29'" :project="'10'" :gigabyte="'15 GB'" />
                    <Card :cardtype="'third'" :title="'Professional'" :price="'39'" :project="'15'" :gigabyte="'30 GB'" />
                    <Card :cardtype="'third'" :title="'Extreme'" :price="'59'" :project="'Unlimited'"
                        :gigabyte="'Unlimited'" />
                </div>
            </div>
        </section>
        <section class="news">
            <div class="news-content">
                <div class="section-info">
                    <h3>Our News</h3>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique non, officia
                        maxime est quibusdam?
                    </span>
                </div>

                <div class="card-container">
                    <div class="news-card">
                        <img src="../img/related-service-2-320x202.jpg" alt="">
                        <h4>Why You Need A SEO Agency</h4>
                        <span class="news-date">November 1st, 2017</span>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit provident ipsa esse
                            magni quibusdam possimus ab tempore officiis ipsam?</span>
                    </div>
                    <div class="news-card">
                        <img src="../img/related-service-4-320x202.jpg" alt="">
                        <h4>SEO Tips For Your Startup</h4>
                        <span class="news-date">November 1st, 2017</span>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex facere, nemo architecto
                            asperiores deserunt maxime veniam error eaque magni distinctio!</span>
                    </div>
                    <div class="news-card">
                        <img src="../img/blog-post-6-320x202.jpg" alt="">
                        <h4>Image Optimization For Your Site</h4>
                        <span class="news-date">November 1st, 2017</span>
                        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit beatae sapiente velit
                            excepturi accusamus odit reiciendis sequi numquam distinctio possimus.</span>
                    </div>
                </div>
                <div class="button-container">
                    <PrimaryButton :content="'go to news'" />
                </div>
            </div>
        </section>
        <section class="reviews">
            <div class="reviews-content">
                <div class="section-info">
                    <h3>What Our Clients Say</h3>
                    <img src="../img/testimonials-2.jpg" alt="">
                    <span class="review">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
                        laboriosam.</span>
                    <span><span>Luis Desalvo, </span>CREO TECH</span>
                </div>
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

        .news-card {
            width: calc(100% /3 - 20px);
            margin: 10px;

            h4 {
                color: $primary-color;
                padding-top: 5px;
            }

            .news-date {
                font-size: 12px;
                display: block;
                padding: 10px 0;
            }

            img {
                width: 100%;
            }
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
        color: white;
    }

    .reviews {
        .review {
            display: block;
        }
    }

    .button-container {
        padding: 30px 0 50px 0;
    }
}
</style>