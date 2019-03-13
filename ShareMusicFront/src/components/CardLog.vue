<template>
<mdb-card>
  <mdb-card-body>
   <form  @submit.prevent="login">
      <p class="h3 text-center py-2">Log in</p>
      <div class="grey-text ">
        <mdb-input v-model="email" label="Your email" icon="envelope" type="email"/>
        <mdb-input v-model="password" label="Your password" icon="lock" type="password"/>
           </div>
        <div class="text-center py-3">
          <mdb-btn color="grey" type="submit">Log in</mdb-btn>
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </div>

        <p class="font-small grey-text d-flex justify-content-center">Don't have an account? <router-link to="/Sign"><a class="dark-grey-text font-weight-bold ml-1"> Sign up</a></router-link></p>
        <p class="font-small grey-text d-flex justify-content-center">Forgot <router-link to="/Sign"><a class="dark-grey-text font-weight-bold ml-1"> Password?</a></router-link></p>

    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';

  export default {
    name: 'CardPage',
    components: {
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput
    },
    data () {
    return {
      email: '',
      password: '',
      error: false
    }
    },
    methods: {
      login () {
        this.$http.post('/usuario/login', { email: this.email, pass: this.password })
        .then(response => {
          if (response.status === 200) {
            // te paso los parametros para que inicialices la session (vue-session por ejemplo)
            // acceder a los datos como 
            //  response.data['nombre']
            //  response.data['nombreReal']
            //  response.data['email']
            // yo uso eso, me imagino que funcionara con tu router
            this.$router.replace(this.$route.query.redirect || '/TimeLine')
          } else {
             //  acceder al error ->
             //  response.data['error']
            this.error = response.data['error']
          }
        })
        .catch(() => this.loginFailed())
      },
      loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
      }
    }
  };
</script>