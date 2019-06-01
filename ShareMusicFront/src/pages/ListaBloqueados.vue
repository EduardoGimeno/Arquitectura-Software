<template>
<div>
      <NavBarUsuario/>
      <div class="center">
        <mdb-row > 
          <mdb-col  md="12">
            <ul class="ul2Col" style="list-style-type:none;">
              <li
              class="liPad"
                is="CardUsuario"
                v-for="user in users"
                v-bind:key="user.UsuarioBloqueado"
                v-bind:user="user.UsuarioBloqueado"
              ></li>
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
  name: 'ListaBloqueados',
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

        this.$http.post('/usuario/listBloqueados', { nombre: this.$route.params.username})
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

.ul2Col {
-webkit-column-count: 3;
-moz-column-count: 3;
column-count: 3;
-webkit-column-gap: 70px;
column-gap: 70px;
-moz-column-gap: 70px;


}

.liPad {
  display: inline-block;
    width:250px;
}



</style>