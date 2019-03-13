<template>
<mdb-card>
  <mdb-card-body>
    <form>
      


      <mdb-row > 
          <!-- Grid column -->
            <mdb-col md="6" xl="8" class="pl-md-3 px-lg-auto px-0">

                <div class="chat-message">

                    <ul class="list-unstyled chat">
                        <li class="d-flex justify-content-between mb-4">
                            <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center ml-lg-3 ml-0 z-depth-1">
                            <div class="chat-body white p-3 ml-2 z-depth-1">
                                <div class="header">
                                    <strong class="primary-font">Alex Steward</strong>
                                    <small class="pull-right text-muted"><mdb-icon far icon="clock"/> 12 mins ago</small>
                                </div>
                                <hr class="w-100">
                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </li>
                        <li class="d-flex justify-content-between mb-4">
                            <div class="chat-body white p-3 z-depth-1">
                                <div class="header">
                                    <strong class="primary-font">Lara Croft</strong>
                                    <small class="pull-right text-muted"><mdb-icon far icon="clock"/> 13 mins ago</small>
                                </div>
                                <hr class="w-100">
                                <p class="mb-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                                </p>
                            </div>
                            <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center mr-0 ml-3 z-depth-1">
                        </li>
                        <li class="d-flex justify-content-between mb-4 pb-3">
                            <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center ml-lg-3 ml-0 z-depth-1">
                            <div class="chat-body white p-3 ml-2 z-depth-1">
                                <div class="header">
                                    <strong class="primary-font">Alex Steward</strong>
                                    <small class="pull-right text-muted"><mdb-icon far icon="clock"/> 12 mins ago</small>
                                </div>
                                <hr class="w-100">
                                <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </li>
                        <li class="white">
                            <mdb-textarea label="Mensaje" @input="handleInput" :rows="3"/>
                        </li>
                        <mdb-btn color="info" rounded size="sm" class="float-right">Send</mdb-btn>
                    </ul>

                </div>

            </mdb-col>


            

        </mdb-row>


      
      
        


        
    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput,mdbTextarea  } from 'mdbvue';

  export default {
    name: 'CardConver',
    components: {
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput,
      mdbTextarea
    }
  };
</script>


<style scoped>

.bor{
  border: 3px solid #73AD21;
}


</style>