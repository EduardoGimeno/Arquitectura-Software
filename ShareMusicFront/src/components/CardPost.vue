<template>
  <mdb-card>
    <mdb-card-body>
      <form>
        <p class="h4 text-center py-4">Nuevo Post</p>
        <div class="grey-text">
          <mdb-input label="Título" type="text"/>
          <div class="input-group"></div>
          <mdb-textarea label="Contenido" @input="handleInput" :rows="3"/>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            >
            <label class="custom-file-label" for="inputGroupFile01">Archivo</label>
          </div>
          <mdb-file-input btnColor="primary"/>
        </div>
        <div class="text-center py-4 mt-4">
          <mdb-btn color="grey" type="submit">Publicar</mdb-btn>
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
  mdbTextarea,
  mdbFileInput
} from "mdbvue";

export default {
  name: "CardPost",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput,
    mdbTextarea,
    mdbFileInput
  }
};
</script>