<template>
  <v-card
    class="pa-auto ma-auto px-25 rounded-xl"
    width="500px"
    outlined>
    <v-card-title
      class="justify-center">
      Login
    </v-card-title>
    <v-card-actions 
      class="justify-center"

    >
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        solo
        dense
        v-model="uid"
        label="ID"
        required
      ></v-text-field>

      <v-text-field
        solo
        dense
        v-model="password"
        label="PW"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        @click="onSubmit"
      >
        Login
      </v-btn>
    </v-form>
  </v-card-actions>
 </v-card>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      valid: true,
      uid: '',
      password: '',
    }),

     methods: {
      ...mapActions(['login']),
      async onSubmit () {
        try {
          let loginResult = await this.login({uid: this.uid, password: this.password})
          console.log(loginResult)
          if (loginResult == true) {
            this.$router.push({name: 'setting'});
          }else{
            alert('아이디 혹은 비밀번호가 잘못되었습니다.')
          }
          console.log(loginResult) // 로그인 성공하면 true, 아니면 false
        } catch (err) {
          console.error(err)
        }
      }
    }
  }
</script>
<style scoped>

</style>