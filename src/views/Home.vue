<template>
  <div class="home">
    <v-container fluid>
      <v-layout row>
        <v-flex mt-2 mb-3 xs12 sm6 offset-sm3>
          <h2 class="font-weight-light">Questions to be answered</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
          <v-flex my-3 xs12 sm6 offset-sm3>
            
            <v-card v-for="(question, i) in questions" :key="i">

              <v-card-title primary-title style="text-align: left">
                <div>
                  <div class="headline pb-2">{{ question.title }}</div>
                  <span class="grey--text">Posted by {{ question.userId.name }}</span>
                  <span class="grey--text"> at {{ question.date }}</span>
                </div>
              </v-card-title>

              <v-card-actions>
                  <v-spacer></v-spacer>
                  <div>
                    {{ question.upvote.length }}
                    <v-btn flat icon>
                      <v-icon>arrow_upward</v-icon>
                    </v-btn>
                  </div>
                  <v-spacer></v-spacer>
                  <span>VOTE</span>
                  <v-spacer></v-spacer>
                  <div>
                    {{ question.downvote.length }}
                    <v-btn flat icon>
                      <v-icon>arrow_downward</v-icon>
                    </v-btn>
                  </div>
                  <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions([
       'getQuestions',
       'upvoteQuestion',
       'downvoteQuestion',
    ]),
    upvote () {
      // let payload = {
      //   voterId: voterId,
      //   questionId: questionId
      // }
      // console.log(payload)
      this.upvoteQuestion()
    },
    downvote () {
      // let payload = {
      //   voterId: voterId,
      //   questionId: questionId
      // }
      // console.log(payload)
      // this.
    }
  },
  computed: {
    ...mapState([
        'questions'
    ])
  },
  created: function () {
      this.getQuestions()
  }
}
</script>
