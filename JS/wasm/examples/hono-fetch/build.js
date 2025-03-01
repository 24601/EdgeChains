import { build } from "esbuild";

let runtime = process.argv[2];

build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: false,
    outfile: "bin/index.js",
    format: "esm",
    target: "esnext",
    platform: "node",
    // external: ["arakoo"],
    define: {
        "process.env.arakoo": JSON.stringify(runtime === "arakoo"),
    },
}).catch((error) => {
    console.error(error);
    process.exit(1);
});
