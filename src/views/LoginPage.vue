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
        v-model="id"
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
        @click="validate"
      >
        Login
      </v-btn>
    </v-form>
  </v-card-actions>
 </v-card>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      id: '',
      password: '',
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
<style scoped>

</style>