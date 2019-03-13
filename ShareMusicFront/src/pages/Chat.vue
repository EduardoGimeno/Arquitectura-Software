<template>
<div>
      <NavBarUsuario/>
      <div class="center ">
        <mdb-row > 
          <mdb-col md="5 ">
            <div class="list">
            <CardChat/>
            </div>
          </mdb-col>
    
          <mdb-col md="7 ">
             <div class="chat">
               <CardConver/>
              </div>
          </mdb-col>

        </mdb-row>
      </div>
</div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import {  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbView, } from 'mdbvue';
import CardChat from "@/components/CardChat";
import CardConver from "@/components/CardConver";
import NavBarUsuario from "@/components/NavBarUsuario";
export default {
  name: 'Perfil',
  components: {
    NavBarUsuario,
    CardChat,
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
    mdbView,
  }
};
</script>

<style scoped>

.list{
  position: relative;
  bottom: 1;
  left: 20%;
  width: 70%;
  height: 50%;
}

.chat{
  position: relative;
  bottom: 1;
  left: 5%;
  width: 90%;
}

.back{
position: relative;
  width: 100%;
  height: 1000px;
background-color: #ede7f6;
}

.perfil{
  position: fixed;
  top:15%;
 right: 0;
  bottom: 1;
  left: 10%;
  width: 25%;
  height: 50%;

}

.llenar{
   width: 100%;
}

.bor{
  border: 3px solid #73AD21;
}

.center {
  position: absolute;
  top: 15%;
  left: 8%;
  width: 80%;
}
.log{
 position: relative;
 margin: auto;
  right: 0;
  bottom: 1;
  left: 0;
  width: 95%;
  height: 50%;

}


</style>