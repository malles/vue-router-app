<template>
    <div>

        <partial name="component-header"></partial>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank.</p>

        <partial name="javascript-component"></partial>

    </div>
</template>
<script>

    module.exports = {

        name: 'component',

        namespace: 'api',

        examples: {},

        props: ['component'],

        partials: {
            'component-header':  require('../../../src/templates/component-header.html'),
            'javascript-component':  require('../../../src/templates/javascript-component.html')
        },

        data() {
            return {
                title: 'Component',
                route: {name: 'javascript', params: {namespace: this.$options.namespace, component: this.$options.name}},
                examples: this.$options.examples
            };
        }
    };

</script>