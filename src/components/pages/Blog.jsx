import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="mb-12">
        <img
          src="/images/blog-post-1.png"
          alt="Pastry Art"
          className="w-full rounded-lg shadow-md mb-4"
        />
        <h2 className="text-3xl font-semibold mb-4">Pastry is Her Canvas</h2>
        <p className="text-lg">
          Pastry is her canvas, creating art from the lemons of life, painting
          experiences with a piping bag and whipping cream, capturing moments
          through her lens. Her ingredients include a teaspoon of music, a dash
          of poetry, a pinch of art, and a whole lot of yum. So join her as she
          takes you on a lifelong journey of discovery.
          With Love, The Afrocentric Baker
        </p>
      </div>
      <div className="mb-12">
        <img
          src="/images/blog-post-2.jpg"
          alt="New Home Baking"
          className="w-full rounded-lg shadow-md mb-4"
        />
        <h2 className="text-3xl font-semibold mb-4">Moving to a New Home</h2>
        <p className="text-lg">
          My husband and I recently moved into our new home. Who knew that
          moving could be so stressful? It's been a couple of days, and I still
          feel like we haven't accomplished much, though the truth is the house
          is coming together nicely. Since the house has a built-in oven, and we
          got some new equipment, I decided to try them out. Working with a new
          oven can be a nightmare. Depending on how it was made, the heat levels
          vary, making a bulletproof recipe a disaster.
        </p>
        <p className="text-lg mt-4">
          This is exactly what happened to me. I baked a vanilla orange sponge
          cake and set it at the temperature I always used, 180 degrees, though
          these new ovens come with so many different settings. I put the
          temperature at 180 degrees on the fan setting. The inside turned out
          great, but the high temperature combined with the fan overbaked the
          top of the cakes. My hubby was devouring the cakes, giving me praises,
          but I knew that this was not the quality of cake I usually make.
        </p>
        <p className="text-lg mt-4">
          So I decided to make a trifle. A trifle is a cake that is assembled in
          a vessel (usually glass) that is filled with cream, fruits, nuts, and
          any other element of your choice. We had bananas and granola, which I
          used to make my trifle. I soaked each layer of cake with orange syrup,
          topped it with a layer of fresh cream and banana slices. I then added
          ground and whole granola for texture.
        </p>
      </div>
    </div>
  );
};

export default Blog;
