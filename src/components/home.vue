<template>
    <div>

       <h1>I can say {{ config.title}} </h1>

        <p>{{ text }}</p>

        <div class="uk-grid" uk-grid>
            <div class="uk-width-1-2@m">
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title">A card</h3>
                    <p>
                        Bacon ipsum dolor amet in t-bone dolor nostrud jerky picanha. Proident irure
                        incididunt
                        veniam.
                        T-bone lorem picanha est minim ribeye. Dolore cow sed cupidatat in in, beef turkey
                        kielbasa
                        voluptate flank tempor shoulder. Spare ribs landjaeger pork chop, mollit boudin
                        hamburger
                        sirloin. Drumstick fatback ipsum landjaeger.
                    </p>
                </div>
            </div>
            <div class="uk-width-1-2@m">
                <div class="uk-card uk-card-primary uk-card-body">
                    <h3 class="uk-card-title">A card</h3>
                    <p>
                        Bacon ipsum dolor amet in t-bone dolor nostrud jerky picanha. Proident irure
                        incididunt
                        veniam.
                        T-bone lorem picanha est minim ribeye. Dolore cow sed cupidatat in in, beef turkey
                        kielbasa
                        voluptate flank tempor shoulder. Spare ribs landjaeger pork chop, mollit boudin
                        hamburger
                        sirloin. Drumstick fatback ipsum landjaeger.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    module.exports = {

        name: 'home',

        props: ['config'],

        data() {
            return {
                text: `Bacon ipsum dolor amet in t-bone dolor nostrud jerky picanha. Proident irure incididunt veniam. T-bone lorem picanha est minim ribeye. Dolore cow sed cupidatat in, beef turkey kielbasa voluptate flank tempor shoulder. Spare ribs landjaeger porkchop, mollit boudin hamburger sirloin. Drumstick fatback ipsum landjaeger.`
            };
        }
    };

</script>