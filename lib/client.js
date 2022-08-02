import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "dx9fsa7m",
  dataset: "production",
  apiVersion: "2022-05-07",
  useCdn: true,
  token:
    "skLeHtIkokjOQ9h8Wu9On12LwOhJZ9oaIlepWywn9EMWsQBlieHXHGMHu5uLZB90potBegw8WLfsLTmrYJCZBtyNiF2ELzN5CieCh1uUryA0Lvw7i4l4c0XU29r3zCFaNWfsoy8i78W3luxtxBEPYLwWiAlbmKL9rr28OwxSDaDHzJVkBGA3",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
