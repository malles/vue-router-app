var Vue = require('vue');

module.exports = {
    'accordion': {
        name: 'accordion',
        title: 'Accordion',
        component: Vue.extend(require('./accordion.vue')),
        vars: [
            {key: '@accordion-item-margin-top', default: '@global-margin', description: ''},
            {key: '@accordion-title-font-size', default: '@global-large-font-size', description: ''},
            {key: '@accordion-title-line-height', default: '1.4', description: ''},
            {key: '@accordion-content-margin-top', default: '@global-margin', description: ''},
        ]

    },
    'alert': {
        name: 'alert',
        title: 'Alert',
        component: Vue.extend(require('./alert.vue')),
        vars: [
            {key: '@alert-margin-vertical', default: '@global-margin', description: ''},
        ]
    },
    'notification': {
        name: 'notification',
        title: 'Notification',
        component: Vue.extend(require('./notification.vue')),
        vars: [
        ]
    }
};