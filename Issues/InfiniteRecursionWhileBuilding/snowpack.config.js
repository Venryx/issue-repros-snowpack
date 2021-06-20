import {builtinModules} from "module";

/** @type {import("snowpack").SnowpackUserConfig } */
const config = {
	plugins: [],
	packageOptions: {
		external: builtinModules,
	},
	devOptions: {
		open: "none",
	},
	buildOptions: {
		out: "Build/esm",
		sourcemap: true,
	},
};
export default config;