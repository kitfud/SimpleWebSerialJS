import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";

const input = ["src/index.js"];
export default [
    {
        // UMD
        input,
        plugins: [
            nodeResolve(),
            babel({
                babelHelpers: "bundled",
            }),
            terser(),
        ],
        output: {
            file: `dist/simple-serial.min.js`,
            format: "umd",
            name: "SimpleSerial", // this is the name of the global object
            esModule: false,
            exports: "named",
            sourcemap: true,
        },
    },
// ESM and CJS
    {
        input,
        plugins: [nodeResolve()],
        output: [
            {
                dir: "dist/esm",
                format: "esm",
                exports: "named",
                sourcemap: true,
            },
            {
                dir: "dist/cjs",
                format: "cjs",
                exports: "named",
                sourcemap: true,
            },
        ],
    },
];
