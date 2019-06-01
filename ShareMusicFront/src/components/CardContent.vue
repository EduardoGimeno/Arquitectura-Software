<template>
  <mdb-row class=" log">
    <mdb-card>
      <mdb-view hover cascade>
        <mdb-card-image v-bind:src="imagen" alt="Card image cap"></mdb-card-image>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </mdb-view>
      <mdb-card-body cascade>
        <h5 class="pink-text pb-2 pt-1">
          <mdb-icon icon="user-circle"/>
          {{user}}
        </h5>
        <mdb-card-title>
          <strong>{{title}}</strong>
        </mdb-card-title>
        <mdb-card-text>{{description}}</mdb-card-text>

        <a @click.prevent="megusta()" class="icons-sm li-ic">
          <mdb-icon icon="heart"/>
          {{likes}}
        </a>


        <a @click.prevent="nomegusta()" v-on="nomegusta" class="icons-sm tw-ic">
          <mdb-icon icon="heart-broken"/>
          {{dislikes}}
        </a>

        <a v-if="autor" @click.prevent="modalEdit = true" class="icons-sm tw-ic">
          <mdb-icon icon="edit"/>
        </a>
      </mdb-card-body>
    </mdb-card>

    <mdb-modal v-if="modalEdit" @close="modalEdit = false">
      <form @submit.prevent="publicar">
        <mdb-modal-header>
          <mdb-modal-title>
            <h4>Editar post</h4>
          </mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="grey-text">
            <mdb-input v-model="title" label="Título" type="text" required/>
            <div class="input-group"></div>
            <mdb-textarea v-model="description" label="Contenido" @input="handleInput" :rows="3" required/>
            <mdb-input v-model="imagen" label="Imagen" type="text" required/>
          </div>
        </mdb-modal-body>
        <mdb-modal-footer>
          <form @submit.prevent="eliminar">
            <mdb-btn type="submit" outline="secondary" @click.native="modalEdit = false">Eliminar</mdb-btn>
          </form>
          <mdb-btn
            type="submit"
            outline="secondary"
            @click.native="modalEdit = false"
          >Publicar</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
  </mdb-row>
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
  mdbNavbarBrand,
  mdbInput
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
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbTextarea
} from "mdbvue";
import CardMensaje from "@/components/CardMensaje";

export default {
  name: "Perfil",
  props: [
    "id",
    "imagen",
    "user",
    "title",
    "description",
    "likes",
    "dislikes",
    "comments"
  ],
  components: {
    CardMensaje,
    mdbTextarea,
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
    mdbView,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput
  },
  data() {
    return {
      modalEdit: false,
      autor: false,
    };
  },
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  },
  
  mounted: function () {
    this.autor= this.$session.get("name") == this.user;
  },
  methods: {
    publicar() {
      this.$http
        //añadir campos a devolver
        .post("/post/editarPost", {
          id: this.id,
          titulo: this.title,
          cuerpo: this.description,
          img: this.imagen
        })
        .then(response => {
          if (response.status === 200) {
            window.location.reload();
          }
        })
        .catch(() => this.loginFailed());
    },
    eliminar() {
      this.$http
        //añadir campos a devolver
        .post("/post/borrarPost", {
          id: this.id,
        })
        .then(response => {
          if (response.status === 200) {
            window.location.reload();
          }
        })
        .catch(() => this.loginFailed());
    },
    megusta() {
      this.$http
        //añadir campos a devolver
        .post("/post/likePost", {
          id: this.id,
        })
        .then(response => {
          if (response.status === 200) {
            this.likes=this.likes +1;
          }
        })
        .catch(() => this.loginFailed());
    },
    nomegusta() {
      this.$http
        //añadir campos a devolver
        .post("/post/dislikePost", {
          id: this.id,
        })
        .then(response => {
          if (response.status === 200) {
            this.dislikes=this.dislikes +1;
          }
        })
        .catch(() => this.loginFailed());
    },
  }
};
</script>

<style scoped>
</style>