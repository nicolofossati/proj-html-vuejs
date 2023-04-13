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
                <img src="../img/agency-seo-desk-front.jpg" alt="">
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
                    <Card :cardtype="'second'" :icon="'building'" :title="'Local SEO'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque sed temporibus id totam cadipisicing elit.'" />
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
                        <span class="news-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugit
                            provident ipsa esse
                            magni quibusdam possimus ab tempore officiis ipsam?</span>
                    </div>
                    <div class="news-card">
                        <img src="../img/related-service-4-320x202.jpg" alt="">
                        <h4>SEO Tips For Your Startup</h4>
                        <span class="news-date">November 1st, 2017</span>
                        <span class="news-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex facere, nemo
                            architecto
                            asperiores deserunt maxime veniam error eaque magni distinctio!</span>
                    </div>
                    <div class="news-card">
                        <img src="../img/blog-post-6-320x202.jpg" alt="">
                        <h4>Image Optimization For Your Site</h4>
                        <span class="news-date">November 1st, 2017</span>
                        <span class="news-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
                            beatae sapiente velit
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
                <div class="slider-reviews">
                    <div class="left-arrow"><i class="fa-solid fa-chevron-left" v-if="store.current_client > 0"
                            @click="slider_review_change('left')"></i></div>
                    <div class="right-arrow"><i class="fa-solid fa-chevron-right"
                            v-if="store.current_client < store.clients.length - 1"
                            @click="slider_review_change('right')"></i></div>
                    <div class="section-info">
                        <h3>What Our Clients Say</h3>
                        <div v-for="(client, index) in store.clients" v-show="index == store.current_client">
                            <img :src="getImgUrl(client.img)" alt="">
                            <span class="review">{{ client.review }}</span>
                            <span class="testimonial-company"><span class="testimonial">{{ client.name }},
                                </span>{{ client.agency }}</span>
                        </div>

                        <div class="dots">
                            <span :class="(store.current_client == index) ? 'dot selected-dot' : 'dot'"
                                v-for="(dot, index) in store.clients.length"></span>
                        </div>
                    </div>
                </div>
                <div class="card-container divider">
                    <div class="left-arrow"><i class="fa-solid fa-chevron-left" @click="change_partners('left')"></i></div>
                    <div class="right-arrow"><i class="fa-solid fa-chevron-right" @click="change_partners('right')"></i>
                    </div>

                    <img :src="getImgUrl(`../img/clients_partner_${partner}-200x202.png`)" alt=""
                        v-for="partner in current_partners">
                    <!--
                    <img src="../img/clients_partner_5-200x202.png" alt="">
                    <img src="../img/clients_partner_6-200x202.png" alt="">-->
                </div>
            </div>
        </section>
        <section class="contact-us">
            <div class="img-backround"></div>
            <div class="contact-us-content">
                <div class="section-info">
                    <h3>Start Your Free Consultation</h3>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae!</span>
                    <div class="button-container">
                        <PrimaryButton :content="'contact us now'" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            store,
            current_partners: [1, 2, 3, 4]
        }
    }, components: {
        Card, PrimaryButton
    }, methods: {
        getImgUrl(path) {
            return new URL(path, import.meta.url).href;
        },
        slider_review_change(side) {
            if (side == "left") {
                store.current_client--;
            } else { // right
                store.current_client++;
            }
        },
        change_partners(side) {
            if (side == "left") {
                for (let i = 0; i < 4; i++) {
                    if (this.current_partners[i] == 1) {
                        this.current_partners[i] = 6;
                    } else {
                        this.current_partners[i]--;
                    }
                }
            } else {
                for (let i = 0; i < 4; i++) {
                    if (this.current_partners[i] == 6) {
                        this.current_partners[i] = 1;
                    } else {
                        this.current_partners[i]++;
                    }
                }
            }
        }
    }
}

import { store } from '../store.js';

import PrimaryButton from './PrimaryButton.vue';
import Card from './Card.vue';
</script>

<style scoped lang="scss">
@use "../styles/colors.scss" as *;

.main-container {
    section {
        padding-top: 80px;
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
                font-weight: 900;
                font-size: 22px;
            }

            span {
                font-weight: 600;
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
            width: 90%;
            margin: auto;
        }

        span {
            color: $grey-text;
        }
    }

    .services {
        background-color: $secondary-color;
        color: white;
        padding: 50px 0;
    }

    .work {
        padding-bottom: 40px;

        span {
            color: $grey-text;
        }

        .work-img-container {
            flex-wrap: wrap;

            img {
                width: calc(100% /3 - 20px);
                margin: 10px;
            }
        }
    }

    .plans {
        background-image: url('../img/background1.jpg');
        background-size: cover;
        color: white;

        .plans-content {
            padding-bottom: 50px;
        }
    }

    .news {
        padding-bottom: 30px;

        .section-info {
            span {
                color: $grey-text;
            }
        }

        .news-content {
            .news-card {
                h4 {
                    font-weight: 900;
                }

                span {
                    color: $grey-text;
                    font-weight: 600;
                }

                .news-text {
                    font-size: 14px;
                }
            }
        }
    }

    .reviews {
        .left-arrow {
            position: absolute;
            left: 0;
            top: 50%;
        }

        .right-arrow {
            position: absolute;
            right: 0;
            top: 50%;
        }

        .slider-reviews {
            position: relative;



            .section-info {
                padding-bottom: 30px;

                img {
                    width: 100px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    margin: 20px 0;
                }

                .review {
                    display: block;
                    font-style: italic;
                }

                .testimonial-company {
                    display: block;
                    padding: 15px 0;

                    .testimonial {
                        font-weight: 900;
                    }
                }


                .dots {
                    display: flex;
                    justify-content: space-between;
                    width: 30px;
                    margin: auto;

                    .dot {
                        display: inline-block;
                        border: 1px solid black;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                    }

                    .selected-dot {
                        background-color: black;
                    }

                }
            }
        }


        .divider {
            border-top: 1px solid $light-grey-text;
            justify-content: space-around;
            padding-bottom: 40px;
            position: relative;

            img {
                width: 100px;
            }
        }

    }

    .contact-us {
        position: relative;

        .img-backround {
            background-image: url('../img/case-study-gallery-3-1.jpg');
            background-size: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            background-position: center;

            &::before {
                content: '';
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(0, 0, 0, 0.6);
                position: absolute;
            }
        }

        padding-top: 0;
        color: white;

        .contact-us-content {
            padding: 80px 0px 30px;
            position: relative;
        }
    }

    .button-container {
        padding: 30px 0 50px 0;
    }
}
</style>