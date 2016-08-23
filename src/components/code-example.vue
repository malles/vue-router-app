<template>
    <div>
        <h5 class="uk-text-muted">Example</h5>
        <div class="uk-position-relative">

            {{{ example.example }}}

        </div>
        <ul class="uk-tab" uk-tab="connect:'#{{id}}'">
            <li v-if="example.html"><a href="#">HTML</a></li>
            <li v-if="example.js"><a href="#">Javascript</a></li>
            <li v-if="example.example"><a href="#">Example code</a></li>
        </ul>
        <ul :id="id" class="uk-switcher">
            <li v-if="example.html">
                <pre><code>{{ example.html }}</code></pre>
            </li>
            <li v-if="example.js">
                <pre><code>{{ example.js }}</code></pre>
            </li>
            <li v-if="example.example">
                <pre><code>{{ example.example }}</code></pre>
            </li>
        </ul>
    </div>

</template>
<script>
    var _ = require('lodash');

    module.exports = {

        name: 'code-example',

        props: ['example'],

        data() {
            return {
                id: _.uniqueId('example-')
            };
        }

    };
</script>