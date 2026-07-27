// ============================================================================================= //
//                                           STYLELINT                                           //
// ============================================================================================= //

export default {
    extends: [
        '@front-factory/stylelint-config'
    ],
    rules: {
        'custom-property-pattern': null,
        'scss/at-if-no-null': null,

        // The layer name comes from a mixin argument, so the value is an
        // interpolation the rule cannot resolve to a kebab-case string.
        'layer-name-pattern': null
    }
};
