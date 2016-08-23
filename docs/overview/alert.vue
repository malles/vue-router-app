<template>
    <div>

        <h3 :id="$options.name">
            <a uk-icon="icon: link" class="uk-float-right uk-icon-link" v-link="{ name: $options.name }"></a>
            {{ title }}
        </h3>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <div uk-alert>
            <a href="#" class="uk-alert-close" uk-close></a>
            <p><strong>Alert!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="uk-alert-primary" uk-alert>
            <a href="#" class="uk-alert-close" uk-close></a>
            <p><strong>Primary!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="uk-alert-success" uk-alert>
            <a href="#" class="uk-alert-close" uk-close></a>
            <p><strong>Success!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="uk-alert-warning" uk-alert>
            <a href="#" class="uk-alert-close" uk-close></a>
            <p><strong>Warning!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="uk-alert-danger" uk-alert>
            <a href="#" class="uk-alert-close" uk-close></a>
            <p><strong>Danger!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <partial name="overview-component"></partial>

    </div>
</template>
<script>

    var js_index = require('../js/index');
    var less_index = require('../less/index');

    module.exports = {

        name: 'alert',

        namespace: 'core',

        partials: {
            'overview-component':  require('../../src/templates/overview-component.html')
        },

        props: ['config'],

        data() {
            return {
                title: 'Alert',
                props: js_index.core.components.alert.props,
                options: js_index.core.components.alert.options,
                vars: less_index.alert.vars
            };
        }
    };

</script>