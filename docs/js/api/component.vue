<template>
    <div>

        <h3 :id="$options.name">
            <a uk-icon="icon: link" class="uk-float-right uk-icon-link"
               v-link="{ name: 'javascript', params: { namespace: 'core', component: $options.name } }"></a>
            {{ title }}
        </h3>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank.</p>

        <partial name="javascript-component"></partial>

    </div>
</template>
<script>

    module.exports = {

        name: 'component',

        examples: {},

        props: ['component'],

        partials: {
            'javascript-component':  require('../../../src/templates/javascript-component.html')
        },

        data() {
            return {
                title: 'Component',
                examples: this.$options.examples
            };
        }
    };

</script>