<template>
    <v-container fluid>
        <v-layout row>
            <v-flex mt-2 mb-3 xs12 sm6 offset-sm3>
                <h2 class="font-weight-light">Register Form</h2>
                <v-container class="blog-form-input mt-5">
                    <v-form>
                        <v-text-field outline v-model="signupName" :counter="10" label="Name"></v-text-field>
                        <v-text-field outline v-model="signupEmail" label="E-mail"></v-text-field>
                        
                        <v-text-field
                            v-model="signupPassword"
                            :append-icon="showpass ? 'visibility_off' : 'visibility'"
                            :type="showpass ? 'text' : 'password'"
                            label="Create Password"
                            @click:append="showpass = !showpass" >
                        </v-text-field>

                    </v-form>
                </v-container>
                <v-container>
                    <v-btn large round color="teal darken-1" class="white--text" v-on:click="registerUser">Sign Up</v-btn>
                </v-container>
            </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import swal from 'sweetalert2'

export default {
    data: function () {
        return {
            showpass: false,
            signupName: '',
            signupEmail: '',
            signupPassword: ''

        }
    },
   methods: {
        ...mapActions([
            'getQuestions',
            'registerUserAccount',
            'upvoteQuestion',
            'registerUserAccount',
            'loginUserAccount'
        ]),
        registerUser () {
            if (this.signupName !== '' || this.signupEmail !== '' || this.signupPassword !== '') {

                let payload = {
                    name: this.signupName,
                    email: this.signupEmail,
                    password: this.signupPassword
                }
                
                this.registerUserAccount(payload)

                this.signupName = ''
                this.signupEmail = ''
                this.signupPassword = ''

            } else {
                swal('Opps', 'failed to register a user', 'error')
            }
        }
    }
}
</script>

<style>

</style>
