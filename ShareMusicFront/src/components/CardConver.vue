<template>
  <mdb-card>
    <mdb-card-body>
      <form>
        <mdb-row>
          <!-- Grid column -->
          <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0">
            <div class="chat-message">
              <ul class="list-unstyled chat">
                <li
                  is="CardMessage"
                  v-for="message in messages"
                  v-bind:key="message.id"
                  v-bind:name="message.name"
                  v-bind:message="message.message"
                  v-bind:date="message.timestamp"
                ></li>
              </ul>
              <div class="card-action mb-3">
                <CreateMessage :name="name" :idConver="idConver"/>
            </div>
            </div>
          </mdb-col>
        </mdb-row>
      </form>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import CreateMessage from "@/components/CreateMessage";
import fb from "@/fire";
import moment from "moment";
import CardMessage from "@/components/CardMessage";
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
  name: "CardConver",
  props: ["idConver"],
  components: {
    mdbCard,
    CardMessage,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput,
    mdbTextarea,
    CreateMessage
  },
  data() {
    return {
      name: this.$session.get("name"),
      messages: [],
    };
  },
  created() {
    let ref = fb.collection("convers").doc(this.idConver).collection("messages");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            message: doc.data().message,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
      });
    });
  }
};
</script>


<style scoped>
.bor {
  border: 3px solid #73ad21;
}
</style>