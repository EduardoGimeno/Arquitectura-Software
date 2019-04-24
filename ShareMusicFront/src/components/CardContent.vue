<template>
  <mdb-row class="mb-3 log">
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

        <mdb-btn tag="a" floating fab size="md" @click.native="modal = true">
          <mdb-icon icon="comments"/>
          {{comments}}
        </mdb-btn>
        <mdb-btn tag="a" floating fab size="md" @click.native="modalEdit = true">
          <mdb-icon icon="edit"/>
        </mdb-btn>
      </mdb-card-body>
    </mdb-card>

    <mdb-modal v-if="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>
          <h4>Respuestas a {{user}}</h4>
        </mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <mdb-row>
          <!-- Grid column -->
          <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0">
            <div class="chat-message">
              <ul class="list-unstyled chat">
                <li
                  is="CardMensaje"
                  v-for="(comentario) in comentarios"
                  v-bind:key="comentario.id"
                  v-bind:user="comentario.user"
                  v-bind:fecha="comentario.fecha"
                  v-bind:imagen="comentario.imagen"
                  v-bind:mensaje="comentario.mensaje"
                ></li>
              </ul>
            </div>
          </mdb-col>
        </mdb-row>
        <hr class="w-100">
        <div class="white pl-md-2">
          <mdb-textarea label="Comentario" @input="handleInput" :rows="3"/>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn outline="secondary">Enviar</mdb-btn>
        <mdb-btn style="background-color: #563e91;" @click.native="modal = false">Close</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <mdb-modal v-if="modalEdit" @close="modalEdit = false">
      <form @submit.prevent="publicar">
        <mdb-modal-header>
          <mdb-modal-title>
            <h4>Editar post</h4>
          </mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
          <div class="grey-text">
            <mdb-input v-model="title" label="Título" type="text"/>
            <div class="input-group"></div>
            <mdb-textarea v-model="description" label="Contenido" @input="handleInput" :rows="3"/>
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
        </mdb-modal-body>
        <mdb-modal-footer>
          <form @submit.prevent="eliminar">
            <mdb-btn type="submit" outline="secondary" @click.native="modalEdit = false">Eliminar</mdb-btn>
          </form>
          <mdb-btn
            type="submit"
            style="background-color: #563e91;"
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
      modal: false,
      modalEdit: false,
      comentarios: [
        {
          id: 1,
          user: "Alex Steward",
          fecha: "12 mins ago",
          imagen: "https://image.flaticon.com/icons/svg/149/149071.svg",
          mensaje:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    };
  },
  methods: {
    publicar() {
      this.$http
        //añadir campos a devolver
        .post("/post/editarPost", {
          id: this.id,
          titulo: this.title,
          cuerpo: this.description
        })
        .then(response => {
          if (response.status === 200) {
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