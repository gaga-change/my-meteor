// Libs
import {Meteor} from 'meteor/meteor';
import {Vue} from 'meteor/akryum:vue';
import {Accounts} from 'meteor/accounts-base'


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

// Main app
import AppLayout from '/imports/ui/AppLayout.vue';

// Import the router factory
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

// Create router instance
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
})

// App start
Meteor.startup(() => {
  // Create the router instance
  const router = routerFactory.create()

  // Start the Vue app
  new Vue({
    router,
    ...AppLayout,
  }).$mount('#app');
});

// Meteor.startup(() => {
//   new Vue({
//     render: h => h(AppLayout),
//   }).$mount('#app');
// });