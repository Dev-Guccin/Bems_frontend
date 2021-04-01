<template>
  <div class="about">
    <v-container>
      <v-file-input
      show-size
      accept=".xlsx"
      label="Click here to select .xlsx file"
      v-model="chosenFile"
      @change="excelChange"
      ></v-file-input>
    <v-btn block
      color="info"
      class="ma-2 white--text"
      @click="excelUpload">Excel Upload
      <v-icon right dark>mdi-upload</v-icon>
    </v-btn>
    <v-btn block
      color="info"
      class="ma-2 white--text"
      >Excel Download
      <v-icon right dark>mdi-download</v-icon>
    </v-btn>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex><Modbus></Modbus></v-flex>
        <v-flex><Bacnet></Bacnet></v-flex>
        <v-flex><Database></Database></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Modbus from '../components/Modbus.vue'
import Bacnet from '../components/Bacnet.vue'
import Database from '../components/Database.vue'

export default {
  data() {
    return {
      excelData: [],
      chosenFile: null
    };
  },
  components: {
      Modbus,
      Bacnet,
      Database
  },
  methods: {
    excelChange(event){
      console.log(event)
    },
    excelUpload() {
      if(!this.chosenFile){
        console.log("데이터 없음")
        alert("아무것도 없습니다.ddd")
        return
      }
      else{
        console.log("데이터 존재함")
        console.log(this.chosenFile.name);
      }
      const frm = new FormData() 
      frm.append('file', this.chosenFile) 
      console.log(frm.getAll("file"))
      this.$axios.post('/setting/excel', frm,{ 
        headers: { 
          //'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((response) => { // 응답 처리 
        console.log(response)
      }) .catch((error) => { // 예외 처리 
        console.log(error)
      })
    }
  }
}
</script>