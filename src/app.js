
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

// Define some components
var Home = require('./views/home');
var Bacon = require('./views/bacon');
var Brisket = require('./views/brisket');

// The router needs a root component to render.
var App = Vue.extend({
    name: 'bacon-router',
    data:() => {
        return {
            config: window.$config
        };
    }
});

// Create a router instance.
var router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    linkActiveClass: 'uk-active'
});

// Define some routes.
router.map({
    '/': {
        name: 'home',
        component: Vue.extend(Home)
    },
    '/bacon': {
        name: 'bacon',
        component: Vue.extend(Bacon),
        subRoutes: {
            '/brisket': {
                name: 'brisket',
                component: Vue.extend(Brisket)
            }
        }
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
