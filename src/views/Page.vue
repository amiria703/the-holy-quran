<template>
    <div class="page">
        <img src="../assets/tazhib-landscape.jpg" alt="" id="tazhib">

        <div>
            <p v-for="text in texts.surahs" :key="text.id" id="surahs">
                {{text.name}}
            </p>
        </div>

        <h1 id="page">{{$route.params.page}}</h1>

        <div id="con" :style="margin()">
            <p v-for="text in texts.ayahs" :key="text.id" id="quran">
                {{text.text}}<span class="ayahend">﴿{{text.numberInSurah}}﴾</span>
            </p>
        </div>
    </div>
</template>

<style>
    .page {
        direction: rtl;
        text-align: right;
    }

    @font-face {
        src: url("../assets/QuranTaha.ttf");
        font-family: "QuranTaha";
    }

    @font-face {
        src: url("../assets/vazir.ttf");
        font-family: "Vazir FD";
    }

    #quran {
        font-family: "Vazir FD";
        display: inline;
        font-size: x-large;
    }

    .ayahend {
        color: darkblue;
    }

    #tazhib {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -999;
    }

    #con {
        background: white;
    }

    #page {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
    }

    #surahs {
        display: inline;
        background: white;
    }
</style>

<script>
    const axios = require('axios');
    export default {
        data() {
            return {
                page: this.$route.params.page,
                texts: null
            }
        },
        mounted() {
            axios
                .get('http://api.alquran.cloud/v1/page/' + this.$route.params.page + '/quran-uthmani')
                .then(response => (this.texts = response.data.data))
        },
        methods: {
            margin: function () {
                if (this.$mq == "sm") {
                    return "margin: 3.5rem"
                } else {
                    return "margin: 10rem"
                }
            }
        }
    }
</script>