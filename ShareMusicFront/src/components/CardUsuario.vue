<template>
  <router-link :to="{ name: 'Perfil', params: { username: user}}">
    <mdb-card class="mb-3">
      <mdb-card-body>
        <form>
          <div class="text-center">
            <img
              v-bind:src="imagen"
              alt="avatar"
              class="avatar rounded-circle z-depth-1"
              height="65%"
              width="65%"
            >
          </div>

          <p class="h4 text-center mt-4 mb-3">{{name}}</p>
          <p class="h5 text-center grey-text mb-4">@{{user}}</p>
        </form>
      </mdb-card-body>
    </mdb-card>
  </router-link>
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
export default {
  name: "CardUsuario",
  props: ["user", "name"],
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
      seguido: false,
      //Datos de muestra -> cambiar a props
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
      nombre: "Nombre Apellidos"
    };
  }
};
</script>