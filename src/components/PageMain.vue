<template>
    <div class="main-container">
        <section class="meet">
            <h3>Meet ecc...</h3>
            <span>Lorem ipsum</span>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </section>
        <section class="services">
            <h3>See ecc...</h3>
            <span>Lorem ipsum</span>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </section>
        <section class="work">
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
        </section>
        <section class="plans">
            <h3>Our Plans</h3>
            <span>Lorem ipsum</span>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </section>
        <section class="news">
            <h3>Our News</h3>
            <span>Lorem ipsum</span>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </section>
        <section class="reviews">
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
        </section>
        <section class="contact-us">
            <h3>Start Tour Free Concultation</h3>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, molestiae!</span>

        </section>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.main-container {
    width: 60%;
    margin: auto;

    section {
        padding: 15px 0;
        text-align: center;
    }

    .card-container {
        display: flex;
        flex-direction: row;

        .card {
            width: calc(100% /3 - 20px);
            height: 100px;
            margin: 10px;
            background-color: cadetblue;
        }
    }

    .work-img-container {
        flex-wrap: wrap;
    }
}
</style>