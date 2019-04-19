<template>
  <mdb-card>
    <mdb-card-body>
      <form @submit.prevent="publicar">
        <p class="h4 text-center py-4">Nuevo Post</p>
        <div class="grey-text">
          <mdb-input v-model="title" label="Título" type="text"/>
          <div class="input-group"></div>
          <mdb-textarea v-model="body" label="Contenido" @input="handleInput" :rows="3"/>
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
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    publicar() {
      this.$http
        .post("/post/addPost", {
          titulo: this.title,
          cuerpo: this.body
        })
        .then(response => {
          if (response.status === 200) {
          }
        })
        .catch(() => this.loginFailed());
    },
  }
};

</script>