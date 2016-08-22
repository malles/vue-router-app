var assets = __dirname + "/web/assets";

module.exports = [

    {
        entry: {
            "app": "./src/app"
        },
        output: {
            filename: "./web/bundle/[name].js"
        },
        resolve: {
            alias: {
                "jquery$": assets + "/jquery/dist/jquery.js",
                "vue-form$": assets + "/vue-form/dist/vue-form.common.js",
                "vue-resource$": assets + "/vue-resource/dist/vue-resource.common.js",
                "JSONStorage$": assets + "/JSONStorage/storage.js"
            }
        },
        module: {
            loaders: [
                {
                    test: /(src|tests)(\/|\\).*\.js$/,
                    loader: 'babel',
                    query: { presets: ['es2015'] }
                },
                { test: /\.vue$/, loader: "vue" },
                { test: /\.html$/, loader: "vue-html" }
            ]
        }
    }

];
