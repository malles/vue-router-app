<template>
    <div>

        <h3 :id="$options.name">
            <a uk-icon="icon: link" class="uk-float-right uk-icon-link" v-link="{ name: $options.name }"></a>
            {{ title }}
        </h3>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <partial name="less-component"></partial>

    </div>
</template>
<script>

    module.exports = {

        name: 'accordion',

        props: ['component'],

        partials: {
            'less-component':  require('../../src/templates/less-component.html')
        },

        data() {
            return {
                title: 'Accordion'
            };
        }
    };

</script>