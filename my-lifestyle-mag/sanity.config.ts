import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'vanguard-studio',
  title: 'Vanguard Lifestyle Magazine',
  
  // Tu ID real según el error que me has pasado
  projectId: 'fpdiv8gk', 
  // El nombre estándar del dataset (donde vive la info)
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
