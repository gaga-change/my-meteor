<template>
  <div>
    test

    <my-button :label="'按钮'" @click="myClick"></my-button>
  </div>
</template>

<script>
  import {Session} from 'meteor/session'
  console.log(Session)
  export default {
    name: 'App',
    created(){
      Session.setDefault('gaga', 0)
    },
    methods:{
      myClick(){
        console.log(Session.get('gaga'))
      }
    }
  }
</script>

<style>

</style> 