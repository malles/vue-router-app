<template>
    <div>

        <h1 id="main">Less</h1>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

        <div class="uk-grid" uk-grid>
            <div class="uk-width-1-5@s">

                <div class="uk-card uk-card-default uk-card-body" uk-sticky="contain:true">

                    <ul class="uk-tab uk-tab-left">
                        <li v-for="component in components" v-link-active>
                            <a v-link="{ name: 'less', params: {component: component.name } }">{{ component.title }}</a>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="uk-width-4-5@s">
                <div class="uk-width-1-1" v-for="component in components">

                    <component :is="component.name" :component="component"></component>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
    var _ = require('lodash');
    var index = require('../../docs/less/index');

    module.exports = {

        name: 'less',

        props: ['config'],

        data() {
            return {
                components: []
            };
        },

        created() {
            _.forEach(index, (component) => {

                this.components.push(component);
                this.$options.components[component.name] = component.component;

            });
        },

        components: {}
    };

</script>