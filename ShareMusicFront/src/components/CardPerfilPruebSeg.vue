<template>
  <mdb-card>
    <mdb-card-body>
      <form>
        <form @submit.prevent="block">
        <div class="text-right">
          <mdb-btn outline="secondary" type="submit">Bloquear</mdb-btn>
          <a class="icons-sm li-ic" onclick="form.submit();"><mdb-icon icon="ban" /> </a>
        </div>
        </form>

        <div class="text-center">
          <img
            v-bind:src="imagen"
            alt="avatar"
            class="avatar rounded-circle z-depth-1"
            height="50%"
            width="50%"
          >
        </div>
        <p class="h4 text-center mt-4 mb-3">{{nombre}}</p>

        <form @submit.prevent="seguir">
          <div v-if="publico" class="text-center mb-5">
            <mdb-btn v-if="seguido" outline="secondary" type="submit">Dejar de seguir</mdb-btn>
            <mdb-btn v-else outline="secondary" type="submit">Seguir</mdb-btn>
          </div>

          <div v-else class="text-center mb-5">
            <router-link to="EdicionPerfil">
              <mdb-btn outline="secondary">Editar</mdb-btn>
            </router-link>
          </div>
        </form>

        <div class="grey-text">
          <p class="h5 mt-4">@{{user}}</p>
          <p class="h6 py-2">{{biografia}}</p>
          <router-link to="ListaUsuarios">
            <p class="h7 mt-4">
              {{seguidores}}
              <a>seguidores</a>
            </p>
          </router-link>
          <router-link to="ListaUsuarios">
            <p class="h7">
              {{seguidos}}
              <a>seguidos</a>
            </p>
          </router-link>
          <router-link to="ListaUsuarios">
            <p class="h7">
              {{bloqueados}}
              <a>bloqueados</a>
            </p>
          </router-link>
        </div>
      </form>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbInput,
  mdbIcon
} from "mdbvue";

export default {
  name: "CardPerfilPruebSeg",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput,
    mdbIcon
  },
  data() {
    return {
      user: 'juanPrueba',
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
      nombre: "Juan Prueba",
      biografia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      seguidores: "prueba",
      seguidos: "prueba",
      bloqueados: "prueba",
      publico: true,
      seguido: false, //false muestra el botón 'Seguir', true muestra el botón 'Dejar de seguir'
      bloqueado: false 
    };
  },
  created: function() {
    /*
    this.$http
      .post('/usuario/esBloqueado', { usuario: 'javierprueba', usuarioBloqueado: this.user})
      .then(response => {
        if (response.status === 200) {
          if (response.data["bloqueado"] === 1) {
            this.bloqueado = true;
          } else {
            this.bloqueado = false;
          }
        }
      })
      */
    //Se comprueba si javierprueba sigue a juanprueba
    this.$http
      .post('/usuario/esSeguidor', { usuario: 'javierprueba', usuarioSeguido: this.user})
      .then(response => {
        if (response.status === 200) {
          if (response.data["seguido"] === 1) {
            //Si se siguen se muestra el botón  'Dejar de seguir'
            this.seguido = true;
          } else {
            //Si NO se siguen se muestra el botón  'Seguir'
            this.seguido = false;
          }
        }
      })
      .catch(() => this.failed());
    //Se pide el número de seguidores de juanprueba
    this.$http
      .post("/usuario/numSeguidores", { nombre: this.user })
      .then(response => {
        if (response.status === 200) {
          this.seguidores = response.data["totalSeguidores"];
        }
      })
      .catch(() => this.failed());
    //Se pide el número de seguidos de juanprueba
    this.$http
      .post("/usuario/numSeguidos", { nombre: this.user })
      .then(response => {
        if (response.status === 200) {
          this.seguidos = response.data["totalSeguidos"];
        }
      })
      .catch(() => this.failed());
    //Se pide el número de bloqueados de juanprueba
    this.$http
      .post("/usuario/numBloqueados", { nombre: this.user })
      .then(response => {
        if (response.status === 200) {
          this.bloqueados = response.data["totalBloqueados"];
        }
      })
      .catch(() => this.failed());
  },
  methods: {
    seguir() {
      if (this.seguido === false) {
        this.$http
          .post("/usuario/seguir", {
            nombre: "javierprueba",
            nombreSeguir: this.user
          })
          .then(response => {
            if (response.status === 200) {
              this.seguido = true;
            }
          })
          .catch(() => this.loginFailed());
      } else {
        this.$http
          .post("/usuario/noseguir", {
            nombre: "javierprueba",
            nombreSeguir: this.user
          })
          .then(response => {
            if (response.status === 200) {
              this.seguido = false;
            }
          })
          .catch(() => this.loginFailed());
      }
    },
    block() {
      if (this.bloqueado === false) {
        this.$http
          .post("/usuario/bloquear", {
            nombre: "javierprueba",
            nombreBloquear: this.user
          })
          .then(response => {
            if (response.status === 200) {
              this.bloqueado = true;
            }
          })
          .catch(() => this.loginFailed());
      } else {
        this.$http
          .post("/usuario/desbloquear", {
            nombre: "javierprueba",
            nombreBloquear: this.user
          })
          .then(response => {
            if (response.status === 200) {
              this.seguido = false;
            }
          })
          .catch(() => this.loginFailed());
      }
    },
    loginFailed() {
      this.error = "Login failed!";
      delete localStorage.token;
    }
  }
};
</script>