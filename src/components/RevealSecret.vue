<template>
   <div>
    <!-- Hero -->
    <div class="p-4 shadow-4 rounded-3" style="background-color: hsl(0, 0%, 94%);">
      <h2>Your Secret is Ready!</h2>
      <p>
        This is a simple secret reveal remember after reveal you can't get the secret again
      </p>

      <hr class="my-4" />

      <p>
        Sharing secret is easy now with this ha!!!!
      </p>
    </div>
    <!-- Hero -->
    <br>
    <div class="d-flex justify-content-center">
    <button v-if="!secret" @click="revealsecret" type="button" class="btn btn-primary mx-auto">Reveal Secret!</button>
    </div>
     <div class="d-flex justify-content-center">
     <p class="text-danger"> {{ someerror }}</p>  
    </div>
   <div>
    <div class="d-flex justify-content-center">
    <textarea v-if="secret" v-model="secret" style="width:700px; height:150px;" class="form-control" id="textAreaExample" rows="4"></textarea>
    </div>
   </div>
  </div>
</template>

<script>
import { getsecret } from '../client/index'
export default {
  data () {
    return {
      secret: '',
      uuid: this.$route.params.id,
      someerror: ''
    }
  },
  methods: {
    revealsecret (id) {
      id = this.uuid
      getsecret(id)
        .then(response => {
          this.secret = response.data
          console.log(response.data)
        }).catch(err => {
          this.someerror = err.response.data
        })
    }
  }
}
</script>
