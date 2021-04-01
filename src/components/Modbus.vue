<template>
  <v-container>
    <h2>Modbus</h2>
    <hr>
    <v-layout row>
      <v-flex>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                    ChannelName
                </th>
                <th class="text-left">
                    IpAddress
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
              v-for="item in Devices"
              :key="item.ChannelName"
              >
                <td>{{ item.ChannelName }}</td>
                <td>{{ item.IpAddress }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
      <v-flex>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in Frame"
                :key="item.ChannelName"
              >
                <td>{{ item.ChannelName }}</td>
                <td>{{ item.FrameName }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data(){
        return {
            Devices:'',
            Frame:''
        }
    },
    created: function(){
        console.log("created test");
        this.tableRequest("devices");
        this.tableRequest("frames");
    },
    methods:{
        tableRequest(table){
            this.$axios.post('/test/modbus', {"tablename":table},{
                headers:{
                    'Content-Type':"application/json"
                }
            }).then((response) => { // 응답 처리 
                console.log(response);
                if(table == "devices")this.Devices = response.data;
                else this.Frame = response.data;
            }).catch((error) => { // 예외 처리
                console.log(error);
            });
        }
    }
}
</script>