<template>
  <div>
    <mdb-card>
      <mdb-card-body>
        <form @submit.prevent="publicar">
          <p class="h4 text-center pt-3">Hola, {{user}}!</p>
          <p style="color:#616161;" class="h5-responsive text-left pt-4">Nuevo Post:</p>
          <div class="grey-text">
            <mdb-input v-model="title" label="Título" type="text" required/>
            <div class="input-group"></div>
            <mdb-textarea v-model="body" label="Contenido" @input="handleInput" :rows="3" required/>
            <mdb-input v-model="img" label="Imagen" type="text" required/>
          </div>
          <div class="text-center py-4 mt-4">
            <mdb-btn color="grey" type="submit">Publicar</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
  </div>
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
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter
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
    mdbFileInput,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  },
  data() {
    return {
      title: "",
      body: "",
      user: this.$session.get("realname"),
      img: "",
    };
  },
  methods: {
    publicar() {
      this.$http
        .post("/post/addPost", {
          nombre: this.$session.get("name"),
          titulo: this.title,
          cuerpo: this.body,
          img: this.img
        })
        .then(response => {
          if (response.status === 200) {
             window.location.reload();
          }
        })
        .catch(() => this.loginFailed());
    }
  }
};
</script>