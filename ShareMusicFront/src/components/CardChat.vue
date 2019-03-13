<template>
<mdb-card>
  <mdb-card-body>
    <form>
      


      <mdb-row > 
          <!-- Grid column -->
            <mdb-col md="6" xl="4" class="px-0">
                <div class="white z-depth-1 px-3 pt-3 pb-0">
                    <ul class="list-unstyled friend-list">
                        <li class="active grey lighten-3 p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1" height="20%" width="20%">
                                <div class="text-small">
                                    <strong>John Doe</strong>
                                    <p class="last-message text-muted">Hello, Are you there?</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">Just now</p>
                                    <span class="badge badge-danger float-right">1</span>
                                </div>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1" height="20%" width="20%">
                                <div class="text-small">
                                    <strong>Danny Smith</strong>
                                    <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">5 min ago</p>
                                    <span class="text-muted float-right"><mdb-icon icon="reply" aria-hidden="true"/></span>
                                </div>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1" height="20%" width="20%">
                                <div class="text-small">
                                    <strong>Alex Steward</strong>
                                    <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">Yesterday</p>
                                    <span class="text-muted float-right"><mdb-icon icon="reply" aria-hidden="true"/></span>
                                </div>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1" height="20%" width="20%">
                                <div class="text-small">
                                    <strong>Ashley Olsen</strong>
                                    <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">Yesterday</p>
                                    <span class="text-muted float-right"><mdb-icon icon="reply" aria-hidden="true"/></span>
                                </div>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1" height="20%" width="20%">
                                <div class="text-small">
                                    <strong>Kate Moss</strong>
                                    <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">Yesterday</p>
                                    <span class="text-muted float-right"><mdb-icon icon="reply" aria-hidden="true"/></span>
                                </div>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#" class="d-flex justify-content-between">
                                <img src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="avatar" class="avatar rounded-circle d-flex align-self-center z-depth-1 " height="20%" width="20%">
                                <div class="text-small">
                                    <strong>Lara Croft</strong>
                                    <p class="last-message text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                                <div class="chat-footer">
                                    <p class="text-smaller text-muted mb-0">Yesterday</p>
                                    <span class="text-muted float-right"><mdb-icon icon="reply" aria-hidden="true"/></span>
                                </div>
                            </a>
                        </li>
                        


                    </ul>
                </div>

            </mdb-col>



            

        </mdb-row>


      
      
        


        
    </form>
  </mdb-card-body>
</mdb-card>

</template>

<script>
  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput  } from 'mdbvue';

  export default {
    name: 'CardChat',
    components: {
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput
    }
  };
</script>


<style scoped>

.bor{
  border: 3px solid #73AD21;
}


</style>