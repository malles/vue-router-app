<template>
    <div>

        <partial name="overview-header"></partial>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <code-example class="uk-margin" :example="examples.basic"></code-example>

        <h4>Color modifiers</h4>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison.</p>

        <code-example class="uk-margin" :example="examples.modifiers"></code-example>


        <h4>More content</h4>

        <p>Use a <code>button</code> element ...</p>

        <code-example class="uk-margin" :example="examples.more_content"></code-example>


        <h4>Animations</h4>

        <p>Use the <code>animation</code> option ...</p>

        <code-example class="uk-margin" :example="examples.animation"></code-example>



        <partial name="overview-component"></partial>

    </div>
</template>
<script>

    var js_index = require('../js/index');
    var less_index = require('../less/index');

    module.exports = {

        name: 'alert',

        namespace: 'core',

        examples: {
            'basic': {
                example: `<div uk-alert>
    <a href="#" class="uk-alert-close" uk-close></a>
    <p><strong>Alert!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>`,
                html: `<div uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>...</p>
</div>`
            },
            'modifiers': {
                example: `<div class="uk-alert-primary" uk-alert>
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
</div>`,
                html: `<div class="uk-alert-success" uk-alert>
    ...
</div>`
            },
            'more_content': {
                example: `<div class="uk-alert-danger" uk-alert>
    <button type="button" class="uk-alert-close" uk-close></button>
    <h3>Danger!</h3>
    <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>`,
                html: `<div class="uk-alert-danger" uk-alert>
    <button class="uk-alert-close" uk-close></button>
    <h3>...</h3>
    <p>...</p>
</div>`
            },
            'animation': {
                example: `<div uk-alert="animation: true">
    <a href="#" class="uk-alert-close" uk-close></a>
    <p><strong>Animate!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et magna aliqua.</p>
</div>

<div uk-alert="animation: uk-animation-scale-up; duration:1000">
    <a href="#" class="uk-alert-close" uk-close></a>
    <p><strong>Scale up slowly!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.</p>
</div>

<div class="uk-alert-primary" uk-alert="animation: uk-animation-scale-down">
    <a href="#" class="uk-alert-close" uk-close></a>
    <p><strong>Scale down!</strong> Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  aliqua.</p>
</div>`,
                html: `<div uk-alert="animation: true">
     ...
</div>`
            }
        },

        partials: {
            'overview-header':  require('../../src/templates/overview-header.html'),
            'overview-component':  require('../../src/templates/overview-component.html')
        },

        props: ['config'],

        data() {
            return {
                title: 'Alert',
                props: js_index.core.components.alert.props,
                options: js_index.core.components.alert.options,
                vars: less_index.alert.vars,
                examples: this.$options.examples
            };
        }
    };

</script>