<template>
    <div>

       <h1>I can say {{ config.title}} </h1>

        <p>{{ text }}</p>

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