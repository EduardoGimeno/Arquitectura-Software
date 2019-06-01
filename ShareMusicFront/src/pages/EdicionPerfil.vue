<template>
    <div>
      <NavBarUsuario/>
      <div class="center">
        <mdb-container >
        <mdb-row>
          <mdb-col>
               <CardEdicionPerfil/>
          </mdb-col>
        </mdb-row>
         
      </mdb-container>



      </div>
</div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import {  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbView } from 'mdbvue';
import CardEdicionPerfil from "@/components/CardEdicionPerfil";
import CardContent from "@/components/CardContent";
import NavBarUsuario from "@/components/NavBarUsuario";

export default {
  name: 'Perfil',
  components: {
    CardEdicionPerfil,
    NavBarUsuario,
    CardContent,
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
  data() {
    return {
      imagen:'https://image.flaticon.com/icons/svg/149/149071.svg',
      nombre: 'Nombre Apellidos',
      user: '@User',
      biografia:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      seguidores:609,
      seguidos:100,
      bloqueados:50,
      posts:[
        {
          id:1,
          imagen:'https://cdn.24.co.za/files/Cms/General/d/8224/e9c5b671161d4807aa61b5a305f4a3b7.png',
          user: '@User',
          title:'Cheat day inspirations',
          description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
          likes:609,
          dislikes:100,
          comments:50
        },
        {
          id:2,
          imagen:'https://cdn.24.co.za/files/Cms/General/d/8224/e9c5b671161d4807aa61b5a305f4a3b7.png',
          user: '@User',
          title:'Cheat day inspirations',
          description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
          likes:609,
          dislikes:100,
          comments:50
        },
        {
          id:3,
          imagen:'https://cdn.24.co.za/files/Cms/General/d/8224/e9c5b671161d4807aa61b5a305f4a3b7.png',
          user: '@User',
          title:'Cheat day inspirations',
          description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
          likes:609,
          dislikes:100,
          comments:50
        }
      ]
    }
  },
  colum1: function () {
    return posts.filter(function (post) {
      return post.id % 2 === 0
    })
  },
  colum2: function () {
    return posts.filter(function (post) {
      return post.id % 2 !== 0
    })
  },

  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  },
  
};
</script>

<style scoped>

.col {
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 1px;
}

.back{
position: relative;
  width: 100%;
  height: 1000px;
background-color: #ede7f6;
}

.perfil{
  position: relative;
  top:15%;
 right: 0;
  bottom: 1;
  left: 10%;
  width: 50%;
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
  margin: auto;
  width: 70%;
  top:12%;
  left: 15%;
  padding: 10px;
  
}


</style>