<template>
    <div>

        <partial name="overview-header"></partial>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <partial name="overview-component"></partial>

    </div>
</template>
<script>

    var js_index = require('../js/index');

    module.exports = {

        name: 'lightbox',

        namespace: 'components',

        examples: {},

        partials: {
            'overview-header':  require('../../src/templates/overview-header.html'),
            'overview-component':  require('../../src/templates/overview-component.html')
        },

        props: ['config'],

        data() {
            return {
                title: 'Lightbox',
                route: {name: this.$options.name},
                props: js_index.components.components.lightbox.props,
                options: js_index.components.components.lightbox.options,
                vars: [],
                examples: this.$options.examples
            };
        }
    };

</script>