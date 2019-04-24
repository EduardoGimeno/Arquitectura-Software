<template>
  <mdb-card>
    <mdb-card-body>
      <form>
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
            <form @submit.prevent="block">
                <mdb-btn outline="secondary" v-if="bloqueado" type="submit"> Desbloquear</mdb-btn>
                <mdb-btn outline="secondary" v-else type="submit"> <mdb-icon icon="ban"/></mdb-btn>
            </form>
          </div>

          <div v-else class="text-center mb-5">
            <router-link :to="{ name: 'EdicionPerfil'}">
              <mdb-btn outline="secondary">Editar</mdb-btn>
            </router-link>
          </div>
        </form>

        <div class="grey-text">
          <p class="h5 mt-4">@{{$route.params.username}}</p>
          <p class="h6 py-2">{{biografia}}</p>
          <router-link
            :to="{ name: 'ListaSeguidores', params: { username: $route.params.username}}"
          >
            <p class="h7 mt-4">
              {{seguidores}}
              <a>seguidores</a>
            </p>
          </router-link>
          <router-link :to="{ name: 'ListaSeguidos', params: { username: $route.params.username}}">
            <p class="h7">
              {{seguidos}}
              <a>seguidos</a>
            </p>
          </router-link>
          <router-link
            :to="{ name: 'ListaBloqueados', params: { username: $route.params.username}}"
          >
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
  name: "CardPerfil",
  name: "Perfil",
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
      user: '',
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
      nombre: "",
      biografia: "",
      seguidores: "",
      seguidos: "",
      bloqueados: "",
      publico: "",
      seguido: false,
      bloqueado: false
    };
  },

  created: function() {
    //Se pide el número de seguidores
    var user ='';

    this.$http
      .post("/usuario/perfil", { nombre: this.$route.params.username })
      .then(response => {
        if (response.status === 200) {
          this.user = response.data["nombre"];
          user=response.data["nombre"];
          this.nombre = response.data["nombreReal"];
          this.biografia = response.data["biografia"];
        }
      })
      .catch(() => this.failed());

    this.$http
      .post("/usuario/numSeguidores", { nombre: this.$route.params.username })
      .then(response => {
        if (response.status === 200) {
          this.seguidores = response.data["totalSeguidores"];
        }
      })
      .catch(() => this.failed());
    //Se pide el número de seguidos
    this.$http
      .post("/usuario/numSeguidos", { nombre: this.$route.params.username })
      .then(response => {
        if (response.status === 200) {
          this.seguidos = response.data["totalSeguidos"];
        }
      })
      .catch(() => this.failed());
    //Se pide el número de bloqueados
    this.$http
      .post("/usuario/numBloqueados", { nombre: this.$route.params.username })
      .then(response => {
        if (response.status === 200) {
          this.bloqueados = response.data["totalBloqueados"];
        }
      })
      .catch(() => this.failed());

    if (this.$route.params.username !== this.$session.get("name")) {
      this.publico = true;
      this.$http
        .post("/usuario/esSeguidor", {
          usuario: this.$session.get("name"),
          usuarioSeguido: this.$route.params.username
        })
        .then(response => {
          if (response.status === 200) {
            if (response.data["seguido"] === 1) {
              //Si se siguen se muestra el botón  'Dejar de seguir'
              this.seguido = true;
            } else {
              //Si NO se siguen se muestra el botón  'Seguir'
              this.seguido = false;
            }

            if (response.data["bloqueado"] === 1) {
            this.bloqueado = true;
          } else {
            this.bloqueado = false;
          }
          
          }
        })
        .catch(() => this.failed());
    } else {
      this.publico = false;
    }
    
  },

  methods: {
    failed() {},
    seguir() {
      if (this.seguido === false) {
        this.$http
          .post("/usuario/seguir", {
            nombre: this.$session.get("name"),
            nombreSeguir: this.$route.params.username
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
            nombre: this.$session.get("name"),
            nombreSeguir: this.$route.params.username
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
            nombre: this.$session.get("name"),
            nombreBloquear: this.$route.params.username
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
            nombre: this.$session.get("name"),
            nombreBloquear: this.$route.params.username
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