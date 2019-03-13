<template>
<div>
      <NavBar/>
  <div class="video-background-page">

  <view-wrapper>
    <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay muted="" loop>
      <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4"/>
    </video>
    <mdb-mask class="d-flex justify-content-center gradient">
      <div class="center">
      <mdb-container class="px-md-3 px-sm-0 ">
        <mdb-row>
          
          <mdb-col md="6" class=" bor white-text text-center">
            <h3 class="display-3 font-weight-bold mb-0 pt-md-5">ShareMusic </h3>
            <hr class="hr-light my-4 w-75"/>
            <h4 class="subtext-header mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
          
          </mdb-col>
          <mdb-col md="6">
            <div class="log">
            <CardReg/>
            </div>
          
          </mdb-col>
        </mdb-row>
         
      </mdb-container>
      </div>
      
    </mdb-mask>
  </view-wrapper>

  <mdb-container>
    <mdb-row class="pt-5 pb-4">
      <mdb-col md="12" class="text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</div>
</div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import CardReg from "@/components/CardReg";
import NavBar from "@/components/NavBar";
export default {
  name: 'Sign',
  components: {
    NavBar,
    CardReg,
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


.center {
  position: absolute;
  top: 15%;
}
.log{
 position: relative;
 margin: auto;
  right: 0;
  bottom: 1;
  left: 0;
  width: 70%;
  height: 50%;

}

.video-background-page .gradient {
    background: -moz-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: -webkit-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
}

.video-background-page .view video {
  top: 0!important;
  left: 0!important;
  transform: none!important;
}

.video-background-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}
</style>