
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component('code-example', require('./components/code-example.vue'));
Vue.component('javascript-options', require('./components/javascript-options.vue'));

// Define some components
var home = require('./views/home.vue');
var overview = require('./views/overview.vue');
var javascript = require('./views/javascript.vue');
var less = require('./views/less.vue');

// The router needs a root component to render.
var App = Vue.extend({
    name: 'app-root',
    data:() => {
        return {
            config: window.$config
        };
    }

});

// Create a router instance.
var router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: true,
    linkActiveClass: 'uk-active'
});

// Define some routes.
router.map({
    '/': {
        name: 'home',
        component: Vue.extend(home)
    },
    '/overview': {
        name: 'overview',
        component: Vue.extend(overview),
        subRoutes: _.assign({'/': {
            name: 'accordion',
            title: 'Accordion',
            component: Vue.extend(require('../docs/overview/accordion.vue'))
        }}, require('../docs/overview/subroutes'))
    },
    '/javascript/:namespace/:component': {
        name: 'javascript',
        component: Vue.extend(javascript)
    },
    '/less/:component': {
        name: 'less',
        component: Vue.extend(less)
    }
});

router.afterEach((transition) => {
    if (transition.to.params && transition.to.params.component) {
        console.log(`scroll to ${transition.to.params.component}`);
        var a = jQuery(`<a href="#${transition.to.params.component}"></a>`);
        UIkit.scroll(a);
        a.trigger('click'); //todo?!?
    }
});

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
