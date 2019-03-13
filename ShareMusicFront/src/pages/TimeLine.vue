<template>
<div>
      <NavBarUsuario/>
      <div class="center">
        <mdb-row class="col"> 
          <mdb-col md="5">
            <div class="publish">
            <CardPost/>
            </div>

          </mdb-col>
    
         <mdb-col md="3 ">
            <ul classs= "" style="list-style-type:none;">
              <li
                is="CardContent"
                v-for="post in posts"
                v-if="post.id% 2 !== 0"
                v-bind:key="post.id"
                v-bind:imagen="post.imagen"
                v-bind:user="post.user"
                v-bind:title="post.title"
                v-bind:description="post.description"
                v-bind:likes="post.likes"
                v-bind:dislikes="post.dislikes"
                v-bind:comments="post.comments"
              ></li>
            </ul>
          </mdb-col>


          <mdb-col md="3 ">
            <ul style="list-style-type:none;">
              <li
                is="CardContent"
                v-for="(post) in posts"
                v-if="post.id% 2 === 0"
                v-bind:key="post.id"
                v-bind:imagen="post.imagen"
                v-bind:user="post.user"
                v-bind:title="post.title"
                v-bind:description="post.description"
                v-bind:likes="post.likes"
                v-bind:dislikes="post.dislikes"
                v-bind:comments="post.comments"
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
import CardPost from "@/components/CardPost";
import CardContent from "@/components/CardContent";
import NavBarUsuario from "@/components/NavBarUsuario";
export default {
  name: 'Timeline',
  components: {
    NavBarUsuario,
    CardPost,
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

.publish{
  position: fixed;
  top:15%;
 right: 0;
  bottom: 1;
  left: 13%;
  width: 22%;
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
  width: 100%;
  top:12%;
  padding: 10px;
  
}


</style>

