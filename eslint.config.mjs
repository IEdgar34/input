import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    someConfig,
    eslintConfigPrettier,
    {
        files: ["**/*.js"],
        rules: {
            semi: "error",
            "prefer-const": "error",
        },
    },
    {
        extends: ["some-other-config-you-use", "prettier"],
    },
];
