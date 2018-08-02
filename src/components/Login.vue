<template>
    <v-container fluid>
        <v-layout row>
            <v-flex mt-2 mb-3 xs12 sm6 offset-sm3>
                <h2 class="font-weight-light">Login Form</h2>
                <v-container class="blog-form-input mt-5">
                    <v-form>
                        <v-text-field outline v-model="signinEmail" label="Type registered e-mail"></v-text-field>
                        
                        <v-text-field
                            v-model="signinPassword"
                            :append-icon="showpass ? 'visibility_off' : 'visibility'"
                            :type="showpass ? 'text' : 'password'"
                            label="Type Password"
                            @click:append="showpass = !showpass" >
                        </v-text-field>

                    </v-form>
                </v-container>
                <v-container>
                    <v-btn large round color="teal darken-1" class="white--text" v-on:click="loginUser">Sign In</v-btn>
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
            signinEmail: '',
            signinPassword: ''

        }
    },
    methods: {
        ...mapActions([
            'loginUserAccount'
        ]),
        loginUser () {
            if (this.signinEmail !== '' || this.signinPassword !== '') {

                let payload = {
                    email: this.signinEmail,
                    password: this.signinPassword
                }

                this.loginUserAccount(payload)

            } else {
                swal('oops', 'failed to login')
            }
        }
    }
}
</script>

<style>

</style>
