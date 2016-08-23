<template>
    <div>

        <h1>Javascript</h1>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

        <div class="uk-grid" uk-grid>
            <div class="uk-width-1-5@s">

                <div class="uk-card uk-card-default uk-card-body" uk-sticky="contain:true">

                    <p class="uk-text-center"><a href="#app" uk-totop uk-scroll></a></p>

                    <ul class="uk-tab uk-tab-left">
                        <li v-for="namespace in namespaces" v-link-active>

                            <a class="uk-text-primary"
                               v-link="{ name: 'javascript', params: {
                              namespace: namespace.name, component:(namespace.name + '-main')
                               } }">{{ namespace.title }}
                            </a>
                            <ul class="uk-tab uk-tab-left">
                                <li v-for="component in namespace.components" v-link-active>
                                    <a v-link="{ name: 'javascript', params: {
                                        namespace: namespace.name, component: component.name
                                        } }">{{ component.title }}
                                    </a>
                                </li>
                            </ul>

                        </li>
                    </ul>

                </div>
            </div>

            <div class="uk-width-4-5@s">
                <div class="uk-grid" v-for="namespace in namespaces" uk-grid>

                    <div class="uk-width-1-1">

                        <h2 :id="`${namespace.name}-main`">
                            <a uk-icon="icon: link" class="uk-float-right uk-icon-link"
                               v-link="{ name: 'javascript', params: { namespace: namespace.name, component: (namespace.name + '-main') } }"></a>
                            {{ namespace.title }}</h2>

                        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

                    </div>

                    <div class="uk-width-1-1" v-for="component in namespace.components">

                        <component :is="component.name" :component="component"></component>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    var _ = require('lodash');
    var index = require('../../docs/js/index');

    module.exports = {

        name: 'javascript',

        props: ['config'],

        data() {
            return {
                namespaces: []
            };
        },

        created() {
            _.forIn(index, (namespace) => {

                this.namespaces.push(namespace);
                _.forIn(namespace.components, (component) => this.$options.components[component.name] = component.component);

            });
        },

        components: {}

    };

</script>