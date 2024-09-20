
                  import type { CodegenConfig } from '@graphql-codegen/cli';
      
                  
  const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://staging-api.8basedev.com/cm0pkdo6e000843s6bq0sbhuh',
  generates: {
    'libs/core/src/definitions/schema.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-document-nodes'],
      config: {
        skipTypename: true,
      },
    },
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

      
                  export default config;
              