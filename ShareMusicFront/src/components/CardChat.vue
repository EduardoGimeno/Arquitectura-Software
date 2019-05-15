<template>
  <mdb-card>
    <mdb-card-body>
      <form>
        <mdb-row>
          <!-- Grid column -->
          <mdb-col md="6" xl="4" class="px-0">
            <div class="white z-depth-1 px-3 pt-3 pb-0">
              <ul class="list-unstyled friend-list">
                <li class="active lighten-3 p-2">
                  <a href="#" class="d-flex justify-content-between">
                    <div class="text-small">
                      <strong>Chat único</strong>
                      <p class="last-message text-muted">Ultimo mensaje...</p>
                    </div>
                    <div class="chat-footer">
                      <p class="text-smaller text-muted mb-0">Fecha</p>
                      <span class="badge badge-danger float-right">1</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </mdb-col>
        </mdb-row>
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

export default {
  name: "CardChat",
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbInput
  }
};
</script>


<style scoped>
.bor {
  border: 3px solid #73ad21;
}
</style>