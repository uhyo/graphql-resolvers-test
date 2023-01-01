import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './schema.graphql',
  generates: {
    './src/resolvers.d.ts': {
      plugins: ['./plugins/typescript.js', './plugins/typescript-resolvers.js'],
      config: {
        avoidOptionals: true
      }
    }
  }
}
export default config