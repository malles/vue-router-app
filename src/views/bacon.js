
    module.exports = {
        name: 'bacon-route',

        data:() => {
            return {
                baconIs: `yum`
            };
        },

        props: ['config'],

        template: `<div><bc-bacon :config="config"></bc-bacon></div>`,

        components: {
            'bc-bacon': require('../components/bacon.vue')
        }
    };
