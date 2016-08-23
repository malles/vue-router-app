var Vue = require('vue');

module.exports = {
    'api': {
        name: 'api',
        title: 'Api',
        description: 'Api description',
        components: {
            'boot': {
                name: 'boot',
                title: 'Boot',
                component: Vue.extend(require('./api/boot.vue')),
                mixins: [],
                events: [],
                methods: [],
                props: [],
                options: []
            },
            'component': {
                name: 'component',
                title: 'Component',
                component: Vue.extend(require('./api/component.vue')),
                mixins: [],
                events: [],
                methods: [],
                props: [],
                options: []
            }
        }
    },
    'components': {
        name: 'components',
        title: 'Components',
        description: 'Components description',
        components: {
            'lightbox': {
                name: 'lightbox',
                title: 'Lightbox',
                component: Vue.extend(require('./components/lightbox.vue')),
                mixins: [],
                events: [],
                methods: [],
                props: [
                    {key: 'toggle', value: 'Selector', default: 'a', description: 'Elements toggling the lightbox, containing the images'},
                    {key: 'duration', value: 'Number', default: 500, description: 'Duration of the animation'},
                    {key: 'inverse', value: 'Boolean', default: 'false', description: 'Inverted slidenav colors'}
                ],
                options: [
                    {key: 'dark', value: 'Boolean', default: 'false', description: 'Dark style'},
                    {key: 'attrItem', value: 'String', default: 'uk-lightbox-item', description: 'Class name of the item'},
                    {key: 'items', value: 'Array', default: '[]', description: 'Array of image-urls'},
                    {key: 'index', value: 'Number', default: '0', description: 'Index of item to open'}
                ]
            },
            'notification': {
                name: 'notification',
                title: 'Notification',
                component: Vue.extend(require('./components/notification.vue')),
                mixins: [],
                events: [],
                methods: [],
                props: [],
                options: []
            }
        }
    },
    'core': {
        name: 'core',
        title: 'Core',
        description: 'Core description',
        components: {
            'accordion': {
                name: 'accordion',
                title: 'Accordion',
                component: Vue.extend(require('./core/accordion.vue')),
                mixins: [],
                events: [],
                methods: [],
                props: [
                    {key: 'targets', value: 'Selector', default: '> *', description: ''},
                    {key: 'active', value: 'Boolean', default: 'false', description: ''},
                    {key: 'collapsible', value: 'Boolean', default: 'true', description: ''},
                    {key: 'multiple', value: 'Boolean', default: 'false', description: ''},
                    {key: 'toggle', value: 'Selector', default: '.uk-accordion-title', description: ''},
                    {key: 'content', value: 'Selector', default: '.uk-accordion-content', description: ''},
                    {key: 'transition', value: 'String', default: 'ease', description: ''}
                ],
                options: [
                    {key: 'animation', value: 'Boolean', default: 'true', description: 'Apply animation'},
                    {key: 'clsOpen', value: 'String', default: 'uk-open', description: 'Active class name'}
                ]
            },
            'alert': {
                name: 'alert',
                title: 'Alert',
                component: Vue.extend(require('./core/alert.vue')),
                mixins: ['Class', 'Toggable'],
                events: [],
                methods: [
                    {name: 'closeAlert', arguments: '-', description: `Close the alert element<br><code>UIkit.alert($('#my-alert')).closeAlert();</code>`},
                ],
                props: [
                    {key: 'animation', value: 'Boolean', default: 'true', description: 'Apply animation'},
                    {key: 'close', value: 'Selector', default: '.uk-alert-close', description: 'Selector for close button'}
                ],
                options: [
                    {key: 'duration', value: 'Number', default: 500, description: 'Duration of the animation'}
                ]
            }
        }
    },
    'mixin': {
        name: 'mixin',
        title: 'Mixins',
        description: 'Mixins description',
        components: {}
    },
    'util': {
        name: 'util',
        title: 'Utility',
        description: 'Utility description',
        components: {}
    }
};