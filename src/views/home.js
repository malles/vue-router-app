
module.exports = {

    name: 'home-route',

    props: ['config'],

    template: `<div><bc-home :config="config"></bc-home></div>`,

    components: {
        'bc-home': require('../components/home.vue')
    }
};
