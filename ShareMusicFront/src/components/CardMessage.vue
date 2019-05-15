<template>
  <div class="mb-4">
    <div class="chat-body white p-3 ml-2 z-depth-1">
      <div class="header">
        <strong class="primary-font">{{name}}</strong>
        <small class="pull-right text-muted">
          <mdb-icon far icon="clock"/>
          {{date}}
        </small>
      </div>
      <hr class="w-100">
      <p class="mb-0">{{message}}</p>
    </div>
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
  mdbTextarea
} from "mdbvue";

export default {
  name: "CardMessage",
  props: ["message", "name", "date"],
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
      imagen: "https://image.flaticon.com/icons/svg/149/149071.svg"
    };
  }
};
</script>


<style scoped>
.bor {
  border: 3px solid #73ad21;
}
</style>