<template>
<li class="d-flex justify-content-between mb-3">
    <img v-bind:src="imagen" alt="avatar" class="avatar rounded-circle d-flex align-self-center ml-lg-3 ml-0 z-depth-1">
    <div class="chat-body white p-3 ml-2 z-depth-1">
        <div class="header">
            <strong class="primary-font">{{user}}</strong>
            <small class="pull-right text-muted"><mdb-icon far icon="clock"/>{{fecha}}</small>
        </div>
        <hr class="w-100">
        <p class="mb-0">
            {{mensaje}}
        </p>
    </div>
</li>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, ViewWrapper, mdbMask, mdbBtn, mdbIcon, mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand  } from 'mdbvue';
import {  mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbView } from 'mdbvue';
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter,mdbTextarea } from 'mdbvue';

  export default {
  name: 'CardMensaje',
  props:['user','fecha','imagen','mensaje'],
  components: {
    mdbTextarea,
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
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
  }
};
</script>
<style scoped>
</style>