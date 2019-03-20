<template>
  <mdb-card>
    <mdb-card-body>
      <form @submit.prevent="reg">
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
                <mdb-btn outline="secondary" type="submit">Editar foto</mdb-btn>
              </div>
            </mdb-col>

            <mdb-col md="7">
              <div>
                <mdb-input v-model="name" label="Nombre" type="text"/>
              </div>
              <div class="mt-5">
                <mdb-input v-model="email" label="Email" type="email"/>
              </div>
              <mdb-textarea label="Biografía" @input="handleInput" :rows="3"/>
            </mdb-col>
          </mdb-row>

          <div class="center">
            <p class="h4 mt-5">Nueva contraseña</p>
            <mdb-input v-model="password" label="Password" icon="lock" type="password"/>
            <mdb-input
              v-model="passwordRep"
              label="Confirmar password"
              icon="lock"
              type="password"
            />
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
          </div>
        </div>
        <div class="text-center py-4 mt-4">
          <mdb-btn color="grey" type="submit">Guardar cambios</mdb-btn>
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
      email: this.$session.get("email"),
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
      name: this.$session.get("name")
    };
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