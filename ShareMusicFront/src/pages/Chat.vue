<template>
  <div>
    <NavBarUsuario/>
    <div class="center">
      <div v-if="!hayConver">
        <p class="h2 text-center pt-3">No hay conversaciones todavía :(</p>
        <p class="h5 text-center pt-3">Busca un usuario y chatea con él!</p>
      </div>
      <mdb-row v-else>
        <mdb-col md="5 ">
          <div class="list">
            <mdb-card>
              <mdb-card-body>
                <form>
                  <mdb-row>
                    <mdb-col md="6" xl="12" class="px-3">
                      <div class="white z-depth-1 px-3 pt-3 pb-0">
                        <ul class="list-unstyled friend-list">
                          <li v-for="conver in convers" :key="conver.id">
                            <a
                              @click.prevent="converSelect(conver.id)"
                              v-on="converSelect"
                              class="d-flex justify-content-between"
                            >
                              <div class="text-small">
                                <strong>{{conver.name}}</strong>
                                <p class="last-message text-muted">Ultimo mensaje...</p>
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
          </div>
        </mdb-col>

        <mdb-col md="7 ">
          <div class="chat" v-if="createdConv">
            <CardConver :idConver="actualConver" :key="componentKey"/>
          </div>
        </mdb-col>
      </mdb-row>
    </div>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  ViewWrapper,
  mdbMask,
  mdbBtn,
  mdbIcon,
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand
} from "mdbvue";
import {
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbView
} from "mdbvue";
import fb from "@/fire";
import CardConver from "@/components/CardConver";
import NavBarUsuario from "@/components/NavBarUsuario";
export default {
  name: "Perfil",
  components: {
    NavBarUsuario,
    CardConver,
    mdbContainer,
    mdbRow,
    mdbCol,
    ViewWrapper,
    mdbMask,
    mdbBtn,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbView
  },
  data() {
    return {
      name: this.$session.get("name"),
      actualConver: "",
      convers: [],
      hayConver: false,
      createdConv: false,
      componentKey: 0
    };
  },
  created() {
    let ref = fb.collection("convers").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          if (
            doc.data().user1 == this.$session.get("name") ||
            doc.data().user2 == this.$session.get("name")
          ) {
            this.hayConver = true;
            this.convers.push({
              id: doc.id,
              name: doc.data().name
            });
          }
        }
      });
    });
  },
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  methods: {
    converSelect(id) {
      this.actualConver = id;
      this.componentKey = id;
      this.createdConv = true;
    },
  }
};
</script>

<style scoped>
.list {
  position: relative;
  bottom: 1;
  left: 20%;
  width: 70%;
  height: 50%;
}

.chat {
  position: relative;
  bottom: 1;
  left: 5%;
  width: 90%;
}

.back {
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: #ede7f6;
}

.perfil {
  position: fixed;
  top: 15%;
  right: 0;
  bottom: 1;
  left: 10%;
  width: 25%;
  height: 50%;
}

.llenar {
  width: 100%;
}

.bor {
  border: 3px solid #73ad21;
}

.center {
  position: absolute;
  top: 15%;
  left: 8%;
  width: 80%;
}
.log {
  position: relative;
  margin: auto;
  right: 0;
  bottom: 1;
  left: 0;
  width: 95%;
  height: 50%;
}
</style>