<template>
  <div class="page">
    <h1>{{$route.params.page}}</h1>
  </div>
</template>

<script>
  const axios = require('axios');
  axios.get('http://api.alquran.cloud/v1/page/'+this.$route.params.page+'/quran-unicode')
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
</script>