<template>
    <div class="page">
        <h1>{{$route.params.page}}</h1>
        <div v-for="text in texts" :key="text.id">
            <p>{{text.text}}</p>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');
    export default {
        data () {
            return {
                page: this.$route.params.page,
                texts: null
            }
        },
        mounted () {
            axios
                .get('http://api.alquran.cloud/v1/page/' + this.$route.params.page + '/quran-uthmani')
                .then(response => (this.texts = response.data.data.ayahs))
        }

    }
</script>