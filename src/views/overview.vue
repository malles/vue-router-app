<template>
    <div>

       <h1 id="main">Overview</h1>

        <p>Bacon ipsum dolor amet ham sausage landjaeger pork loin, bacon sirloin short ribs tri-tip salami shank. Capicola shoulder drumstick, frankfurter picanha pancetta shank pastrami bresaola prosciutto biltong venison. Picanha sausage drumstick biltong, capicola venison boudin flank rump short ribs cow frankfurter pork landjaeger. Sirloin sausage cow frankfurter. Bacon drumstick tenderloin venison tongue pork brisket pancetta. Spare ribs pancetta pork loin, pork chop biltong alcatra t-bone picanha prosciutto strip steak cupim. Fatback picanha corned beef pork capicola ground round doner kielbasa shoulder beef ribs.</p>

        <div class="uk-grid" uk-grid>
            <div class="uk-width-1-5@s">

                <div class="uk-card uk-card-default uk-card-body" uk-sticky="contain:true">

                    <p class="uk-text-center"><a href="#app" uk-totop uk-scroll></a></p>

                    <ul class="uk-tab uk-tab-left">
                        <li v-for="route in routes" v-link-active>
                            <a v-link="{ name: route.name }">{{ route.title }}</a>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="uk-width-4-5@s">

                <router-view :config="config"></router-view>

            </div>
        </div>

    </div>
</template>
<script>

    var subroutes = require('../../docs/overview/subroutes');

    module.exports = {

        name: 'overview',

        props: ['config'],

        data() {
            return {
                routes: require('../../docs/overview/subroutes')
            };
        }
    };

</script>