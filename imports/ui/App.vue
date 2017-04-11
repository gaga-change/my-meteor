<template>
  <div>
    <my-button label="Session测试按钮" @click="myClick"></my-button>
    <br><br>
    <input type="text" v-model="msg">
    <my-button label="Messages测试按钮" @click="addMsg"></my-button>
    <code>{{msg}}</code>
    <ul>
      <li v-for="item in messages">
        <span v-text="item.message"></span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Session} from 'meteor/session'
  export default {
    name: 'App',
    data(){
      return {
        msg: '',
        messages: []
      }
    },
    meteor: {
      subscribe: {
        'messages': [],
      },
      messages() {
        return Messages.find({}, {
          sort: { date: -1 },
        });
      },
    },
    created(){
      Session.setDefault('gaga', 0)
    },
    methods: {
      myClick(){
        console.log(Session.get('gaga'))
      },
      addMsg(){
        Meteor.call('addMessage', this.msg);
        this.msg = '';
      }
    }
  }
</script>

<style>

</style> 