// ============================================================================================= //
//                                            VITEST                                             //
// ============================================================================================= //

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        include: [
            '**/__tests__/scss.spec.js'
        ],
        reporters: [
            'default',
            'junit'
        ],
        outputFile: {
            junit: 'junit.xml'
        }
    }
});
