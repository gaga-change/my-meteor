// Libs
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
// Import the router factory
import {Vue} from 'meteor/akryum:vue';
import VueMeta from 'vue-meta';
import VueMeteorTracker  from 'vue-meteor-tracker';
Vue.config.devtools = false;
// import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'


Vue.use(VueMeta);
Vue.use(VueMeteorTracker);

import router from '/imports/routes';


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

// import NotFound from '/imports/ui/NotFound.vue';
import AppLayout from '/imports/ui/AppLayout.vue';


// const routerFactory = new RouterFactory({
//   mode: 'history',
//   scrollBehavior: nativeScrollBehavior,
// });

Meteor.startup(() => {
  // const router = routerFactory.create();
  new Vue({
    router: router.create(),
    render: h => h(AppLayout),
  }).$mount('app');
});



// RouterFactory.configure(router => {
//   router.addRoute({
//     path: '*',
//     component: NotFound,
//   });
// }, -1);


