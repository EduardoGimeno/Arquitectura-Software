<template>
  <mdb-navbar  :color="'primary'" position="top" dark href="#" transparent scrolling>
    <mdb-container>
      <router-link to="/">
      <mdbNavbarBrand href="#"><strong>ShareMusic</strong></mdbNavbarBrand>
      </router-link>
      <mdb-navbar-toggler style="max-width: 1140px">
        <mdb-navbar-nav left>
        </mdb-navbar-nav>
         <mdb-navbar-nav right>

          <mdb-nav-item href="#" waves-fixed>Contacto</mdb-nav-item>

        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import VideoCarouselPage from "@/components/VideoCarouselPage";
import CardLog from "@/components/CardLog";
export default {
  name: "NavBar",
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
    mdbNavbarBrand
  }
};
</script>


<style scoped>
.top-nav-collapse {
  background-color: #563e91 !important;
}

</style>