<template>
  <mdb-navbar position="top" dark href="#" style="background-color: #563e91;" scrolling>
    <mdb-container>
      <router-link to="/">
        <mdbNavbarBrand href="#">
          <strong>ShareMusic</strong>
        </mdbNavbarBrand>
      </router-link>
      <mdb-navbar-toggler style="max-width: 1140px">
        <mdb-navbar-nav left>
          <router-link :to="{ name: 'TimeLine'}">
            <mdb-nav-item href="#" waves-fixed>Inicio</mdb-nav-item>
          </router-link>
          <router-link :to="{ name: 'Perfil', params: { username: user}}">
            <mdb-nav-item href="#" waves-fixed>Perfil</mdb-nav-item>
          </router-link>
          <router-link :to="{ name: 'Chat'}">
            <mdb-nav-item href="#" waves-fixed>Chat</mdb-nav-item>
          </router-link>
          <mdb-nav-item href="#" waves-fixed>Ayuda</mdb-nav-item>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#!" waves-fixed>
            <mdb-icon icon="cog"/>
          </mdb-nav-item>
          <mdb-nav-item href="#!" waves-fixed>
            <mdb-icon icon="sign-out-alt"/>
          </mdb-nav-item>
        </mdb-navbar-nav>

        
          <mdb-form-inline>
            <mdb-input v-model="busqueda" class="mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
            

            <router-link :to="{ name: 'ListaBuscados', params: { busq: busqueda}}">
            <mdb-btn outline="white" size="sm" class="my-0" type="submit">Buscar</mdb-btn>
          </router-link>

          </mdb-form-inline>
        
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
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
  mdbFormInline,
  mdbInput
} from "mdbvue";
import VideoCarouselPage from "@/components/VideoCarouselPage";
import CardLog from "@/components/CardLog";
export default {
  name: "NavBarUsuario",
  components: {
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
    mdbFormInline,
    mdbInput
  },
  data() {
    return {
      user: this.$session.get("name"),
      busqueda:''
    };
  },
  
};
</script>


<style scoped>
.top-nav-collapse {
  background-color: #563e91 !important;
}
</style>