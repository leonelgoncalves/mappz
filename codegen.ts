import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'https://countries.trevorblades.com/graphql',
    documents: ['src/**/*.tsx', 'src/**/*.ts'],
    watch: true,
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        './src/gql/': {
            config: {
                withHooks: true,
                withComponent: false,
                futureProofEnums: true,
                useTypeImports: true
            },
            preset: 'client',
        },
    },
}

export default config
