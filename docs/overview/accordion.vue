<template>
    <div>

        <h3 :id="$options.name">
            <a uk-icon="icon: link" class="uk-float-right uk-icon-link" v-link="{ name: $options.name }"></a>
            {{ title }}
        </h3>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

        <h4>Animated</h4>

        <p>Animates on opening</p>

        <code-example class="uk-margin" :example="examples.overview"></code-example>

        <h4>Multiple</h4>

        <p>Allow multiple drawers to be open</p>

        <code-example class="uk-margin" :example="examples.multiple"></code-example>

        <partial class="uk-margin" name="overview-component"></partial>

    </div>
</template>
<script>

    var js_index = require('../js/index');
    var less_index = require('../less/index');

    module.exports = {

        name: 'accordion',

        namespace: 'core',

        partials: {
            'overview-component':  require('../../src/templates/overview-component.html')
        },

        props: ['config'],

        data() {
            return {
                title: 'Accordion',
                props: js_index.core.components.accordion.props,
                options: js_index.core.components.accordion.options,
                vars: less_index.accordion.vars,
                examples: {
                    overview: {
                        example: `<ul uk-accordion>
    <li class="uk-open">

        <h3 class="uk-accordion-title">Item 1</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
    <li>

        <h3 class="uk-accordion-title">Item 2</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
    <li>

        <h3 class="uk-accordion-title">Item 3</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
</ul>`,
                        html: `<ul uk-accordion>
    <li class="uk-open">
        <h3 class="uk-accordion-title">Title</h3>
        <div class="uk-accordion-content">...</div>
    </li>
</ul>`
                    },
                    multiple: {
                        example: `<ul uk-accordion="multiple: true">
    <li class="uk-open">

        <h3 class="uk-accordion-title">Item 1</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
    <li>

        <h3 class="uk-accordion-title">Item 2</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
    <li>

        <h3 class="uk-accordion-title">Item 3</h3>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

    </li>
</ul>`,
                        html: `<ul uk-accordion="multiple: true">
    <li class="uk-open">
        <h3 class="uk-accordion-title">Title</h3>
        <div class="uk-accordion-content">...</div>
    </li>
</ul>`
                    }
                }
            };
        }
    };

</script>