<template>
    <div>
        <div v-if="options.length" class="uk-overflow-auto">
            <table class="uk-table uk-table-striped">
                <thead>
                <tr>
                    <th class="uk-width-1-5">Option</th>
                    <th v-if="options[0].value" class="uk-width-1-6">Value</th>
                    <th class="uk-width-1-5">Default</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="option in options">
                    <td><code>{{ option.key }}</code></td>
                    <td v-if="option.value">{{ option.value }}</td>
                    <td>{{ option.default }}</td>
                    <td>
                        {{ option.description }}
                        <div v-if="option.options"><code v-for="opt in option.options" class="uk-margin-small-right">{{ opt }}</code></div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script>
    module.exports = {

        name: 'javascript-options',

        props: ['options']

    };
</script>