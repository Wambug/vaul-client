
<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Secrets</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
          </div>
        </div>
      </nav>
      <!-- Jumbotron -->
      <div class="p-5 text-center bg-light">
        <h1 class="mb-3">VAULT</h1>
        <h4 class="mb-3">Share secrets with your colleagues or friends.</h4>
        <a class="btn btn-primary" role="button">create secret</a>
      </div>
      <!-- Jumbotron -->
      <div class="d-flex justify-content-center">
      <p class="text-danger"> {{ someerror }}</p> 
      </div> 
    <form @submit.prevent="createsecret">
    <div class="d-flex justify-content-center">
      <div class="form-outline">
        <label class="form-label" for="textAreaExample">Your secret:</label>
        <textarea  v-model="secret" style="width:700px; height:150px;" class="form-control" id="textAreaExample" rows="4"></textarea>
      </div>
      </div>
      <br>
     <div class="d-flex justify-content-center">
        <label for="minutes">Minutes:</label>
        <input v-model="time" type="number" id="minutes" name="minutes" min="1" max="3600">
      </div>
      <br>
      <div class="d-flex justify-content-center">
      <button @click="createvault(secret,time)" type="button" class="btn btn-primary mx-auto">Share</button>
      </div>
      </form>
      <br>
       <div class="d-flex justify-content-center">
        <div v-if="url">
        <p>Note:This secret will last only the time specified then dissappears</p>
       <label>share the url to reveal the secret</label>
      <textarea v-model="url" style="width:700px; height:150px;" class="form-control" id="textAreaExample" rows="4"></textarea>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createsecret } from '../client/index'
export default {
  data () {
    return {
      secret: '',
      time: '',
      url: '',
      someerror: ''
    }
  },
  methods: {
    createvault (secret, time) {
      if (!this.secret && !this.time){
        this.someerror = "secret and time required" 
      }else{
      secret = this.secret
      time = this.time + 'm'
      createsecret(secret, time)
        .then(response => {
          console.log('Success')
          console.log(response.data)
          this.url = "localhost:8080/secret/"+response.data
        }).catch(err => {
          this.someerror = err.response.data
        })
      }
    }
  }
}
</script>
