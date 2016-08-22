var Vue = require('vue');

module.exports = {
    '/accordion': {
        name: 'accordion',
        title: 'Accordion',
        component: Vue.extend(require('./accordion.vue'))
    },
    '/alert': {
        name: 'alert',
        title: 'Alert',
        component: Vue.extend(require('./alert.vue'))
    },
    '/lightbox': {
        name: 'lightbox',
        title: 'Lightbox',
        component: Vue.extend(require('./lightbox.vue'))
    },
    '/notification': {
        name: 'notification',
        title: 'Notification',
        component: Vue.extend(require('./notification.vue'))
    }
};