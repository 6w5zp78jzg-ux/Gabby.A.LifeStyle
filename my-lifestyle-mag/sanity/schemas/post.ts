// Define el modelo de datos para los artículos de Lifestyle
export const post = {
  name: 'post',
  title: 'Editorial Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      // Vanguard Fix: Desactivamos la regla de 'any' para evitar que el linter bloquee el build en Vercel
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Architecture', value: 'architecture' },
          { title: 'Craftsmanship', value: 'craftsmanship' },
          { title: 'Design', value: 'design' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true, // Permite elegir el punto focal para un diseño responsivo perfecto
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt (Quote or Summary)',
      type: 'text',
      rows: 3,
    },
  ],
}
