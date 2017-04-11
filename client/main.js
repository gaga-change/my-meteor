// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';

// Main app
import App from '/imports/ui/App.vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

Meteor.startup(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app');
});