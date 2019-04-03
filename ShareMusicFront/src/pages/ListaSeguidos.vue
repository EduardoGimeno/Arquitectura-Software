<template>
<div>
      <NavBarUsuario/>
      <div class="center">
        <mdb-row > 
          <mdb-col  md="4">
            <ul style="list-style-type:none;">
              <li
                is="CardUsuario"
                v-for="user in users"
                v-bind:key="user.UsuarioSeguido"
                v-bind:user="user.UsuarioSeguido"
              ></li>
            </ul>
          </mdb-col>
          <mdb-col md="4 ">
             <ul style="list-style-type:none;">
            </ul>
          </mdb-col>
          <mdb-col md="4 ">
             <ul style="list-style-type:none;">
            </ul>
          </mdb-col>
        </mdb-row>

      </div>
</div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import {  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbView } from 'mdbvue';
import CardUsuario from "@/components/CardUsuario";
import NavBarUsuario from "@/components/NavBarUsuario";
export default {
  name: 'ListaSeguidos',
  components: {
    NavBarUsuario,
    CardUsuario,
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
  },
  beforeCreate: function () {
         this.$http.post('/usuario/listSeguidos', { nombre: this.$route.params.username})
        .then(response => {
          if (response.status === 200) {
            this.users= response.data
          }
        })
        .catch(() => this.failed())
  },
  data() {
    return {
      users: ''
    }
  },
  /*
  created: function () {
    this.$http.post('/usuario/listSeguidores', { nombre: this.$route.params.username})
        .then(response => {
          if (response.status === 200) {

          }
        })
        .catch(() => this.failed())
  
  },*/
  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>

.bor{
  border: 3px solid #73AD21;
}

.center {
  position: absolute;
  margin: auto;
  width: 70%;
  top:12%;
  left: 13%;
  padding: 10px;
}


</style>