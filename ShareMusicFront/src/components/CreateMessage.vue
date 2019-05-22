<template>
  <div class="container" style="margin-bottom: 30px">
    <form @submit.prevent="createMessage">
      <div class="form-group">
        <mdb-textarea label="Mensaje" name="message" v-model="newMessage"/>
        <p class="text-danger" v-if="errorText">{{ errorText }}</p>
      </div>

      <mdb-btn color="info" rounded size="sm" type="submit" class="float-right">Send</mdb-btn>
    </form>
  </div>
</template>



<script>
import fb from "@/fire";
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbInput,
  mdbTextarea
} from "mdbvue";

export default {
  name: "CreateMessage",
  props: ["name", "idConver"],
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput,
    mdbTextarea
  },
  data() {
    return {
      newMessage: null,
      errorText: null
    };
  },
  methods: {
    createMessage() {
      if (this.newMessage) {
        this.errorText = "Enviando....";

        fb.collection("convers").doc(this.idConver).collection("messages")
          .add({
            message: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            this.errorText = "Error";
            console.log(err);
          });
        this.newMessage = null;
        this.errorText = null;

      } else {
        this.errorText = "A message must be entered!";
      }
    }
  }
};
</script>


