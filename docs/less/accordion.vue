<template>
    <div>

        <partial name="component-header"></partial>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <partial name="less-component"></partial>

    </div>
</template>
<script>

    module.exports = {

        name: 'accordion',

        examples: {},

        props: ['component'],

        partials: {
            'component-header':  require('../../src/templates/component-header.html'),
            'less-component':  require('../../src/templates/less-component.html')
        },

        data() {
            return {
                title: 'Accordion',
                route: {name: 'less', params: {component: this.$options.name}},
                overview: { name: 'accordion' },
                javascript: { name: 'javascript', params: { namespace: 'core', component: 'accordion'} },
                examples: this.$options.examples
            };
        }
    };

</script>