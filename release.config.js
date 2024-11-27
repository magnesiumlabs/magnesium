// ============================================================================================= //
//                                            RELEASE                                            //
// ============================================================================================= //

export default {
    branches: [
        'main',
        '+([0-9])?(.{+([0-9]),x}).x',
        {
            'name': 'beta',
            'prerelease': true
        }
    ],
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                preset: 'conventionalcommits',
                releaseRules: [
                    {
                        type: 'docs',
                        scope: 'README',
                        release: 'patch'
                    },
                    {
                        type: 'refactor',
                        release: 'minor'
                    }
                ]
            }
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                preset: 'conventionalcommits',
                presetConfig: {
                    types: [
                        {
                            type: 'feat',
                            section: 'Features'
                        },
                        {
                            type: 'fix',
                            section: 'Bug Fixes'
                        },
                        {
                            type: 'chore',
                            hidden: true
                        },
                        {
                            type: 'build',
                            section: 'Build System'
                        },
                        {
                            type: 'docs',
                            hidden: true
                        },
                        {
                            type: 'style',
                            hidden: true
                        },
                        {
                            type: 'refactor',
                            section: 'Code Refactoring'
                        },
                        {
                            type: 'perf',
                            hidden: true
                        },
                        {
                            type: 'test',
                            hidden: true
                        }
                    ]
                }
            }
        ],
        [
            '@semantic-release/changelog',
            {
                changelogTitle: '# Changelog\n\nAll notable changes to this project will be documented in this file. See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                message: 'chore(release): publish version ${nextRelease.version}'
            }
        ]
    ]
};
