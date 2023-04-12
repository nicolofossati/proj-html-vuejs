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
                    <Card :icon="'road'" :title="'Estabilish Goals'"
                        :content="'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id sed voluptates provident quamtempore illo culpa exercitationem nisi.'" />
                    <card :icon="'video'" :title="'Work With a Team'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias enim temporibus id totam cumque nesciunt, obcaecati impedit.'" />
                    <card :icon="'droplet'" :title="'Get Results'"
                        :content="'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ad suscipit quasi recusandae odit! Voluptatibus itaque sed debitis eaque!'" />

                </div>
                <img src="../img/agency-seo-desk-front-800x380.jpg" alt="">
            </div>
        </section>
        <section class="services">
            <div>
                <h3>See ecc...</h3>
                <span>Lorem ipsum</span>
                <div class="card-container">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </section>
        <section class="work">
            <div>
                <h3>Our Work</h3>
                <span>Lorem ipsum</span>
                <div class="card-container work-img-container">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                </div>
            </div>
        </section>
        <section class="plans">
            <div>
                <h3>Our Plans</h3>
                <span>Lorem ipsum</span>
                <div class="card-container">
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
                    <div class="card"></div>
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
        Card
    }
}


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
            background-color: white;
        }
    }

    .work-img-container {
        flex-wrap: wrap;
    }

    .meet {
        img {
            display: block;
        }
    }


}
</style>