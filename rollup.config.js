import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-polyfill-node"
import typescript from "@rollup/plugin-typescript";
import { getBabelInputPlugin } from "@rollup/plugin-babel";

export default args => {
    console.warn (args)
    const result = args.configDefaultConfig;
    console.warn ('Custom roll up')
    return result.map((config, index) => {
            config.output.sourcemap = false
            config.output.inlineDynamicImports = true
            let plugins = config.plugins || []
            console.warn(plugins)
            if (plugins.length > 0) {
                plugins = plugins.filter(plugin => plugin !== null && plugin.name !== 'typescript' && plugin.name !== 'babel')
            }

            console.warn(plugins)
            config.plugins = [
                ...plugins,
                typescript({
                    noEmitOnError: !args.watch,
                    sourceMap: false,
                    inlineSources: false,
                    target: "es2019", // we transpile the result with babel anyway, see below
                    exclude: ["**/__tests__/**/*"]
                }),
                getBabelInputPlugin({
                    sourceMaps: false,
                    babelrc: false,
                    babelHelpers: "bundled",
                    plugins: ["@babel/plugin-proposal-class-properties"],
                    overrides: [
                        {
                            test: /node_modules/,
                            plugins: ["@babel/plugin-transform-flow-strip-types", "@babel/plugin-transform-react-jsx"]
                        },
                        {
                            exclude: /node_modules/,
                            plugins: [["@babel/plugin-transform-react-jsx", { pragma: "createElement" }]]
                        }
                    ]
                }),
                json(),
                nodePolyfills()
            ]   
        return config;
    });
};