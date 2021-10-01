<template>
  <div class="page">
    <h1>{{$route.params.page}}</h1>
    <p>{{this.text()}}</p>
    //TODO: The above code doesn't work
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        page: this.$route.params.page

      };
    },
    methods: {
      text: function(){
        const axios = require('axios');
        axios.get('http://api.alquran.cloud/v1/page/'+this.page+'/quran-unicode')
                .then(function (response) {
                  // handle success
                  console.log(response.data.data.ayahs[0].text);
                  return response.data.data.ayahs[0].text
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
      }
    }
  }
</script>