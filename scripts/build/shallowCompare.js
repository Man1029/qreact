import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-re";
import filesize from "rollup-plugin-filesize";
import cleanup from "rollup-plugin-cleanup";

const license = require("rollup-plugin-license");
const json = require("../../package.json");

export default {
    entry: "./scripts/build/shallowCompare.index.js",
    format: "umd",
    exports: "default",
    dest: "./lib/shallowCompare.js",
    plugins: [
        babel(),

        license({
            banner: `shallowCompares补丁 by 司徒正美 Copyright ${JSON.stringify(
                new Date()
            ).replace(/T.*|"/g, "")}
      IE9+
      `
        }),
        cleanup(),
        replace({
            patterns: [
                {
                    test: "VERSION",
                    replace: json.version
                }
            ]
        }),
        filesize()
    ],
    moduleName: "shallowCompare",
    useStrict: false
};
