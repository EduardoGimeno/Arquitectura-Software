<template>
  <div class="app ">
  <router-view/>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import VideoCarouselPage from "@/components/VideoCarouselPage";
import CardLog from "@/components/CardLog";
export default {
  name: "App",
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