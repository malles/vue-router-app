<template>
    <div>

        <partial name="component-header"></partial>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

        <h4>Create alert dynamically</h4>

        <code-example class="uk-margin" :example="examples.dynamic"></code-example>

        <partial name="javascript-component"></partial>

    </div>
</template>
<script>

    module.exports = {

        name: 'alert',

        examples: {
            dynamic: {
                example: `<button type="button" id="dynamic-alert-button" class="uk-button uk-button-default">Dynamic alert</button>

<div id="dynamic-alert"></div>

<script>
   (function () {

        $('#dynamic-alert-button').click(function () {
            var alert = $('<div uk-alert>Dynamically generated alert!</div>').appendTo($('#dynamic-alert'));
           // UIkit.alert(alert);
        });

    })();
<\/script>`,
                js: `UIkit.alert($('#my-alert'))`
            }
        },

        props: ['component'],

        partials: {
            'component-header':  require('../../../src/templates/component-header.html'),
            'javascript-component':  require('../../../src/templates/javascript-component.html')
        },

        data() {
            return {
                title: 'Alert',
                overview: { name: 'alert' },
                less: { name: 'less', params: { component: 'alert'} },
                examples: this.$options.examples
            };
        }
    };

</script>