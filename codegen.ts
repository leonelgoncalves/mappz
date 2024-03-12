import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://countries.trevorblades.com/graphql',
    documents: ['!src/**/*.tsx', '!src/gql/**/*'],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo', ],
            config: {
                withComponent: true,
                documentMode: 'string',
                avoidOptionals: true
            },
            preset: 'client',
        },
    },
    hooks: { afterAllFileWrite: ['prettier --write'] },
}

export default config
