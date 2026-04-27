import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: "fpdiv8gk",
  dataset: "production",
  apiVersion: "2024-04-27",
  useCdn: false, // Para ver los cambios al instante
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
