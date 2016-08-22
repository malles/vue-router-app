<template>
    <div>

       <h1>Bacon {{ config.title}} daarzo</h1>

        <p>{{ text }}</p>

        <router-view :config="config" class="uk-margin"></router-view>

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