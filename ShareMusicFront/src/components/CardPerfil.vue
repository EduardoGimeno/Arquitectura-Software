<template>
<mdb-card>
  <mdb-card-body>
    <form>
      <div class="text-center ">
      <img v-bind:src="imagen" alt="avatar" class=" avatar rounded-circle  z-depth-1" height="50%" width="50%">
      </div>

      <p class="h4 text-center mt-4 mb-3">{{nombre}}</p>

      <div v-if="publico" class="text-center  mb-5">
        <mdb-btn v-if="seguido" outline="secondary">Dejar de seguir</mdb-btn>
        <mdb-btn v-else  outline="secondary">Seguir</mdb-btn>
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
    name: 'CardPerfil',
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
      user: this.$session.get('name'),
      imagen: 'https://image.flaticon.com/icons/svg/149/149071.svg',
      nombre:  this.$session.get('realname') ,
      biografia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      seguidores:'',
      seguidos:'',
      bloqueados:'',
      publico: false,
      seguido: false
    }
  },
  created: function () {
    //Se pide el número de seguidores
    this.$http.post('/usuario/numSeguidores', { nombre: this.user})
        .then(response => {
          if (response.status === 200) {
            this.seguidores= response.data['totalSeguidores']
          }
        })
        .catch(() => this.failed())
    //Se pide el número de seguidos
    this.$http.post('/usuario/numSeguidos', { nombre: this.user})
        .then(response => {
          if (response.status === 200) {
            this.seguidos= response.data['totalSeguidos']
          }
        })
        .catch(() => this.failed())
    //Se pide el número de bloqueados
    this.$http.post('/usuario/numBloqueados', { nombre: this.user})
        .then(response => {
          if (response.status === 200) {
            this.bloqueados= response.data['totalBloqueados']
          }
        })
        .catch(() => this.failed())

  },
  methods: {
    failed () {
        }
    }
  }
</script>