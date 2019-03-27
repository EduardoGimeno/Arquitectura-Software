<template>
<mdb-card>
  <mdb-card-body>
    <form>
      <div class="text-center ">
      <img v-bind:src="imagen" alt="avatar" class=" avatar rounded-circle  z-depth-1" height="50%" width="50%">
      </div>

      <p class="h4 text-center mt-4 mb-3">{{nombre}}</p>

      <div v-if="publico" class="text-center  mb-5">
        <form  @submit.prevent="seguir">
          <mdb-btn v-if="seguido" outline="secondary" type="submit">Dejar de seguir</mdb-btn>
          <mdb-btn v-else  outline="secondary" type="submit">Seguir</mdb-btn>
        </form>
        </div>
        <div v-else class="text-center mb-5">
          <router-link to="EdicionPerfil">
        <mdb-btn  outline="secondary">Editar</mdb-btn>
          </router-link>
        </div>

      <div class="grey-text">
        <p class="h5 mt-4">@{{user}}</p>
        <p class="h6  py-2">{{biografia}}</p>
        <router-link to="ListaUsuarios"><p class="h7 mt-4">{{seguidores}} <a>seguidores</a> </p></router-link>
        <router-link to="ListaUsuarios"><p class="h7">{{seguidos}} <a>seguidos</a></p></router-link>
        <router-link to="ListaUsuarios"><p class="h7">{{bloqueados}} <a>bloqueados</a></p></router-link>
        </div>
    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';

  export default {
    name: 'CardPerfilPruebSeg',
    name: 'Perfil',
    components: {
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput
    },
    data() {
    return {
      user: 'juanPrueba',
      imagen: 'https://image.flaticon.com/icons/svg/149/149071.svg',
      nombre:  'Juan Prueba' ,
      biografia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      seguidores:'prueba',
      seguidos:'prueba',
      bloqueados:'prueba',
      publico: true,
      seguido: false
    }
  },
  beforeCreate: function () {
    this.$http.post('/usuario/seguidos', { nombre: this.$session.get('name'), nombreSeguir: this.user})
        .then(response => {
          if (response.status === 200) {
            if(response.data['seguidos']===true){
              this.seguido=true;
            }
            else{
              this.seguido=false;
            }
          }
        })
        .catch(() => this.failed())

  },
  methods: {
      seguir () {
        if(this.seguido){
          this.$http.post('/usuario/seguir', { nombre: this.$session.get('name'), nombreSeguir: this.user })
          .then(response => {
            if (response.status === 200) {
              this.seguido=true;
            }
          })
          .catch(() => this.loginFailed())
        }
        else{
          his.$http.post('/usuario/noseguir', { nombre: this.$session.get('name'), nombreSeguir: this.user })
          .then(response => {
            if (response.status === 200) {
              this.seguido=false;       
            }
          })
          .catch(() => this.loginFailed())
        }
        
      },
      loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
      }
    }

  };
</script>