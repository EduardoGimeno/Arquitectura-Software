<template>
<mdb-card>
  <mdb-card-body>
    <form @submit.prevent="reg">
      <p class="h4 text-center py-4">Registro</p>
      <div class="grey-text">
        <mdb-input v-model="name" label="Nombre" icon="envelope" type="text"/>
        <mdb-input v-model="user" label="Usuario" icon="envelope" type="text"/>
        <mdb-input v-model="email" label="Email" icon="envelope" type="email"/>
        <mdb-input v-model="password" label="Password" icon="lock" type="password"/>
        <mdb-input v-model="passwordRep" label="Confirmar password" icon="lock" type="password"/>
        <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </div>
        <div class="text-center py-4 mt-4">
          <mdb-btn color="grey" type="submit">Registrarse</mdb-btn>
        </div>
        
    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';

  export default {
    name: 'CardReg',
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
      name: '',
      user: '',
      email: '',
      password: '',
      passwordRep: '',
      error: false
    }
    },
    methods: {
      reg () {
        this.$http.post('/usuario/registro', { nombre: this.name, 
                                  nombreReal: this.user,
                                  email: this.email,
                                  pass: this.password
                                  })
        .then(response => {
          if (response.status === 200) {
            // te paso los parametros para que inicialices la session (vue-session por ejemplo)
            // acceder a los datos como 
            //  response.data['nombre']
            //  response.data['nombreReal']
            //  response.data['email']
            // yo uso eso, me imagino que funcionara con tu router
            
            this.$router.push('/')
          } else {
             //  acceder al error ->
             //  response.data['error']
            this.error = response.data['error']
          }
        })
        .catch(() => this.regFailed())
      },
      regSuccessful (req) {
        this.$router.replace(this.$route.query.redirect || '/')
      },
      regFailed () {
        this.error = 'Registro fallido!'
      }
    }
  };
</script>