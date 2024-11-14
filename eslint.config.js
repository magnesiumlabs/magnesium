// ============================================================================================= //
//                                            ESLINT                                             //
// ============================================================================================= //

import stylistic from '@stylistic/eslint-plugin';

export default [{
    plugins: {
        '@stylistic': stylistic
    },
    rules: {
        'curly': [
            'error'
        ],
        '@stylistic/array-bracket-newline': [
            'error',
            'consistent'
        ],
        '@stylistic/array-bracket-spacing': [
            'error',
            'never'
        ],
        '@stylistic/array-element-newline': [
            'error',
            'always'
        ],
        '@stylistic/brace-style': [
            'error'
        ],
        '@stylistic/comma-spacing': [
            'error'
        ],
        '@stylistic/indent': [
            'error',
            4
        ],
        '@stylistic/quotes': [
            'error',
            'single'
        ],
        '@stylistic/semi': [
            'error',
            'always'
        ]
    }
}];
