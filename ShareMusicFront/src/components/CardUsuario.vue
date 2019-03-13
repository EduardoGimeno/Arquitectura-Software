<template>
<mdb-card class="mb-3">
  <mdb-card-body>
    <form>
      <div class="text-center ">
      <img v-bind:src="imagen" alt="avatar" class=" avatar rounded-circle  z-depth-1" height="65%" width="65%">
      </div>

      <p class="h4 text-center mt-4 mb-3">{{nombre}}</p>
      <p class="h5 text-center grey-text mb-4">{{user}}</p>
      <div class="text-center ">
        <mdb-btn outline="secondary" size="sm">Dejar de seguir</mdb-btn>
        </div>
    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';
  export default {
    name: 'CardUsuario',
    //props:['imagen','nombre','user'],
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
      imagen:'https://image.flaticon.com/icons/svg/149/149071.svg',
      nombre: 'Nombre Apellidos',
      user: '@User',
    }
  }
  };
</script>