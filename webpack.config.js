var assets = __dirname + "/public/assets";
var modRewrite = require('connect-modrewrite');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = [

    {
        entry: {
            "app": "./src/app"
        },
        output: {
            filename: "./public/bundle/[name].js"
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
                { test: /\.vue$/, loader: "vue" },
                { test: /\.html$/, loader: "vue-html" },
                {
                    test: /(src|tests)(\/|\\).*\.js$/,
                    loader: 'babel',
                    query: { presets: ['es2015'] }
                }
            ]
        },
        plugins: [
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                server: {
                    baseDir: ['public'],
                    middleware: [
                        modRewrite([
                            '!\\.\\w+$ /index.html [L]'
                        ])
                    ]
                }
            })
        ]
    }

];
