<template>
<mdb-row class="mb-3 log"> 
      <mdb-card >
        <mdb-view hover cascade>
          <mdb-card-image v-bind:src="imagen" alt="Card image cap"></mdb-card-image>
          <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
        </mdb-view>
        <mdb-card-body cascade>
          <h5 class="pink-text pb-2 pt-1"><mdb-icon icon="user-circle" />{{user}}</h5>
          <mdb-card-title><strong>{{title}}</strong></mdb-card-title>
          <mdb-card-text>{{description}}</mdb-card-text>
          <a class="icons-sm li-ic"><mdb-icon icon="heart" />{{likes}} </a>
          <a class="icons-sm tw-ic"><mdb-icon icon="heart-broken" /> {{dislikes}} </a>
          <mdb-btn tag="a" floating  fab size="md" @click.native="modal = true"><mdb-icon icon="comments" />{{comments}}</mdb-btn>
        </mdb-card-body>
      </mdb-card>


      <mdb-modal v-if="modal" @close="modal = false">
        <mdb-modal-header>
          <mdb-modal-title><h4 > Respuestas a  {{user}}</h4> </mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>

        <mdb-row > 
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
                <mdb-textarea  label="Comentario" @input="handleInput" :rows="3"/>
              </div>

        </mdb-modal-body>
        <mdb-modal-footer>
           <mdb-btn outline="secondary" >Enviar</mdb-btn>
          <mdb-btn style="background-color: #563e91;" @click.native="modal = false">Close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

    </mdb-row>

</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import {  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbView } from 'mdbvue';
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,mdbTextarea } from 'mdbvue';
import CardMensaje from "@/components/CardMensaje";

  export default {
  name: 'Perfil',
  props:['imagen','user','title','description','likes','dislikes','comments'],
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
  },
  data() {
    return {
      modal: false,
      comentarios:[
        {
          id:1,
          user:'Alex Steward',
          fecha: '12 mins ago',
          imagen:'https://image.flaticon.com/icons/svg/149/149071.svg',
          mensaje:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
};
</script>



<style scoped>


</style>