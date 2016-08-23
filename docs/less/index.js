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
        ],
        theme: [
            {key: '@accordion-item-padding-top', default: '@global-margin', description: ''},
            {key: '@accordion-item-border', default: '@global-border', description: ''},
            {key: '@accordion-item-border-width', default: '@global-border-width', description: ''},
            {key: '@accordion-icon-color', default: '@global-color', description: ''},
        ],
        hooks: [
            {name: '.hook-accordion', selector: '.uk-accordion'},
            {name: '.hook-accordion-item', selector: '.uk-accordion > :nth-child(n+2)'},
            {name: '.hook-accordion-title', selector: '.uk-accordion-title'},
            {name: '.hook-accordion-content', selector: '.uk-accordion-content'},
            {name: '.hook-accordion-misc', selector: ''},
        ]
    },
    'alert': {
        name: 'alert',
        title: 'Alert',
        component: Vue.extend(require('./alert.vue')),
        vars: [
            {key: '@alert-margin-vertical', default: '@global-margin', description: ''},
            {key: '@alert-padding', default: '@global-small-gutter', description: ''},
            {key: '@alert-padding-right', default: '@alert-padding + 14px', description: ''},
            {key: '@alert-background', default: '@global-muted-background', description: ''},
            {key: '@alert-color', default: '@global-color', description: ''},
            {key: '@alert-close-top', default: '@alert-padding + 5px', description: ''},
            {key: '@alert-close-right', default: '@alert-padding', description: ''},
            {key: '@alert-primary-background', default: '#ebf7fd', description: ''},
            {key: '@alert-primary-color', default: '@global-primary-background', description: ''},
            {key: '@alert-success-background', default: '#fff1f0', description: ''},
            {key: '@alert-success-color', default: '@global-success-background', description: ''},
            {key: '@alert-warning-background', default: '#fffceb', description: ''},
            {key: '@alert-warning-color', default: '@global-warning-background', description: ''},
            {key: '@alert-danger-background', default: '#fff1f0', description: ''},
            {key: '@alert-danger-color', default: '@global-danger-background', description: ''},
        ],
        theme: [
            {key: '@alert-close-opacity', default: '0.4', description: ''},
            {key: '@alert-close-hover-opacity', default: '0.8', description: ''},
            {key: '@alert-border-radius', default: '@global-border-radius', description: ''},
        ],
        hooks: [
            {name: '.hook-alert', selector: '.uk-alert'},
            {name: '.hook-alert-close', selector: '.uk-alert-close'},
            {name: '.hook-alert-close-hover', selector: '.uk-alert-close-hover'},
            {name: '.hook-alert-primary', selector: '.uk-alert-primary'},
            {name: '.hook-alert-success', selector: '.uk-alert-success'},
            {name: '.hook-alert-warning', selector: '.uk-alert-warning'},
            {name: '.hook-alert-danger', selector: '.uk-alert-danger'},
            {name: '.hook-alert-misc', selector: ''},
        ]
    },
    'notification': {
        name: 'notification',
        title: 'Notification',
        component: Vue.extend(require('./notification.vue')),
        vars: [],
        theme: [],
        hooks: []
    }
};