import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    './src/resolvers.d.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        avoidOptionals: false
      }
    }
  }
}
export default config