<template>
  <mdb-card>
    <mdb-card-body>
      <form @submit.prevent="editar">
        <p class="h2 text-center py-4">Edición de Perfil</p>

        <div class="grey-text">
          <mdb-row class="py-4">
            <mdb-col md="5">
              <div class="text-center">
                <img
                  v-bind:src="imagen"
                  alt="avatar"
                  class="avatar rounded-circle z-depth-1"
                  height="60%"
                  width="60%"
                >
              </div>
              <div class="text-center py-4">
                <mdb-btn outline="secondary">Editar foto</mdb-btn>
              </div>
            </mdb-col>

            <mdb-col md="7">
              <div>
                <mdb-input v-model="name" label="Nombre" type="text"/>
              </div>
              <div class="mt-5">
                <mdb-input v-model="email" label="Email" type="email"/>
              </div>
              <mdb-textarea v-model="biografia" label="Biografía" @input="handleInput" :rows="3"/>
            </mdb-col>
          </mdb-row>

          <div class="text-center py-4 mt-4">
            <mdb-btn color="grey" type="submit">Guardar cambios</mdb-btn>
          </div>
        </div>
      </form>

      <form @submit.prevent="cambiopass">
        <div class="grey-text">
          <div class="center">
            <p class="h4 mt-5">Nueva contraseña</p>
            <mdb-input v-model="oldPass" label=" Contraseña antigua" icon="lock" type="password"/>
            <mdb-input v-model="newPass" label="Nueva antigua" icon="lock" type="password"/>
            <mdb-input
              v-model="newPass2"
              label="Confirmar contraseña"
              icon="lock"
              type="password"
            />
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </div>

          <div class="text-center py-4 mt-4">
            <mdb-btn color="grey" type="submit">Cambiar contraseña</mdb-btn>
          </div>
        </div>
      </form>

      <form @submit.prevent="eliminar">
        <div class="grey-text">
          <div class="center">
            <p class="h4 mt-5">Eliminar cuenta</p>
            <mdb-input v-model="oldPass" label="Contraseña" icon="lock" type="password"/>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </div>

          <div class="text-center py-4 mt-4">
            <mdb-btn color="grey" type="submit">Eliminar cuenta</mdb-btn>
          </div>
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
  mdbInput
} from "mdbvue";
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  ViewWrapper,
  mdbMask,
  mdbIcon,
  mdbFileInput,
  mdbTextarea
} from "mdbvue";

export default {
  name: "CardEdicionPerfil",
  components: {
    mdbTextarea,
    mdbFileInput,
    mdbContainer,
    mdbRow,
    mdbCol,
    ViewWrapper,
    mdbMask,
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
      email: "",
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
      name: "",
      user: "",
      biografia: "",
      oldPass: "",
      newPass:"",
      newPass2: ""
    };
  },

  created: function() {
    this.$http
      .post("/usuario/perfil", { nombre: this.$session.get("name") })
      .then(response => {
        if (response.status === 200) {
          this.user = response.data["nombre"];
          this.email = response.data["email"];
          this.name = response.data["nombreReal"];
          this.biografia = response.data["biografia"];
        }
      })
      .catch(() => this.failed());
  },
  methods: {
    editar() {
      this.$http
        //añadir campos a devolver
        .post("/usuario/editarperfil", {
          nombreReal: this.name,
          email: this.email,
          biografia: this.biografia,
          nombre: this.user
        })
        .then(response => {
          if (response.status === 200) {
            window.location.reload();
          }
        })
        .catch(() => this.loginFailed());
    },
    cambiopass() {

      if(this.newPass == this.newPass2 && this.oldPass != ""){
        this.$http
        .post("/usuario/cambiarpass", {
          nombre: this.user,
          oldPass: this.oldPass,
          newPass: this.newPass
        })
        .then(response => {
          if (response.status === 200) {
          }
        })
        .catch(() => this.loginFailed());
      }
      
    },
    eliminar() {
      this.$http
        .post("/usuario/borrar", {
          nombre: this.user,
          oldPass: this.oldPass,
        })
        .then(response => {
          if (response.status === 200) {
            this.$session.destroy();
            this.$router.push("/");
          }
        })
        .catch(() => this.loginFailed());
    }
  }
};
</script>

<style scoped>
.center {
  position: relative;
  margin: auto;
  width: 85%;
}

.col {
  width: 100%;
}

.bor {
  border: 3px solid #73ad21;
}
</style>