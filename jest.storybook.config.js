module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    testMatch: [
        "**/*.story.test.[jt]s?(x)"
    ],
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest-setup.js',
    ]
}

