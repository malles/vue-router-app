<template>
    <div>

        <h1>Bacon {{ config.title}} daarzo</h1>

        <div class="uk-grid" uk-grid>
            <div class="uk-width-3-4@s">
                <p>{{ text }}</p>

            </div>
            <div class="uk-width-1-4@s">
                <ul class="uk-tab">
                    <li v-link-active><a v-link="{ name: 'bacon-main', exact: true }">Main</a></li>
                    <li v-link-active><a v-link="{ name: 'brisket', exact: true }">Brisket</a></li>
                </ul>
                <div class="uk-margin">
                    <router-view :config="config" class="uk-margin"></router-view>
                </div>
            </div>
        </div>


    </div>
</template>
<script>

    module.exports = {
        name: 'bacon',

        props: ['config'],

        data() {
            return {
                text: `Loading your Bacon!`
            };
        },

        ready() {
            this.load();
        },

        methods: {
            load() {
                this.$resource(`https://baconipsum.com/api/`)
                        .query({}, {type: 'all-meat', paras: 16, 'start-with-lorem': 1}).then((res) => {
                    this.text = res.data;
                }, (res) => {
                    alert(res.data)
                });
            }
        }
    };

</script>