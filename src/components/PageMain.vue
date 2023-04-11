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
            <h3>Meet ecc...</h3>
            <span>Lorem ipsum</span>
            <div class="card-container">
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
                <div class="card"></div>
            </div>
        </section>
        <section class="work"></section>
        <section class="plans"></section>
        <section class="news"></section>
        <section class="reviews"></section>
        <section class="contact-us"></section>
    </div>
</template>

<script></script>

<style scoped lang="scss">
.main-container {
    width: 60%;
    margin: auto;

    section {
        padding: 15px 0;
    }

    .meet {
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
}
</style>