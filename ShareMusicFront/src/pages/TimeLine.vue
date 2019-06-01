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

        <mdb-col md="6 ">
          <ul class="ul2Col" style="list-style-type:none;">
            <li
              class="liPad"
              is="CardContent"
              v-for="post in posts"
              v-bind:key="post.Id"
              v-bind:id="post.Id"
              v-bind:imagen="post.Imagen"
              v-bind:user="post.NomUsuario"
              v-bind:title="post.Titulo"
              v-bind:description="post.Texto"
              v-bind:likes="post.Likes"
              v-bind:dislikes="post.Dislikes"
              v-bind:comments="post.comments"
            ></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </div>
  </div>
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
  mdbNavbarBrand
} from "mdbvue";
import {
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
  mdbView
} from "mdbvue";
import CardPost from "@/components/CardPost";
import CardContent from "@/components/CardContent";
import NavBarUsuario from "@/components/NavBarUsuario";
export default {
  name: "Timeline",
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
    mdbView
  },
  colum1: function() {
    return posts.filter(function(post) {
      return post.id % 2 === 0;
    });
  },
  colum2: function() {
    return posts.filter(function(post) {
      return post.id % 2 !== 0;
    });
  },
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    } else {
      this.$http
        .post("/post/listarPosts", {
          nombre: this.$session.get("name")
        })

        .then(response => {
          if (response.status === 200) {
            this.posts = response.data;
          }
        })
        .catch(() => this.failed());
    }
  },
  data() {
    return {
      posts: ""
    };
  },
};
</script>

<style scoped>
.col {
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-height: 1px;
}

.back {
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: #ede7f6;
}

.publish {
  position: fixed;
  top: 15%;
  right: 0;
  bottom: 1;
  left: 13%;
  width: 22%;
  height: 50%;
}

.llenar {
  width: 100%;
}

.bor {
  border: 3px solid #73ad21;
}

.center {
  position: absolute;
  margin: auto;
  width: 100%;
  top: 12%;
  padding: 10px;
}

.ul2Col {
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 50px;
  column-count: 2;
  column-gap: 50px;
}

.liPad {
  display: inline-block;
    width:250px;
    padding: 10px 0px;
}
</style>

