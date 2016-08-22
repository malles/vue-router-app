<template>
    <div>

        <h3 :id="$options.name">
            <a uk-icon="icon: link" class="uk-float-right uk-icon-link" v-link="{ name: $options.name }"></a>
            {{ title }}
        </h3>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <partial name="overview-component"></partial>

    </div>
</template>
<script>

    var js_index = require('../js/index');
    var less_index = require('../less/index');

    module.exports = {

        name: 'notification',

        namespace: 'core',

        partials: {
            'overview-component':  require('../../src/templates/overview-component.html')
        },

        props: ['config'],

        data() {
            return {
                title: 'Notification',
                props: js_index.components.components.notification.props,
                options: js_index.components.components.notification.options,
                vars: less_index.notification.vars
            };
        }
    };

</script>