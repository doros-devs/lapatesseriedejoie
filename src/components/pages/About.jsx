import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <img
            src="/images/about-image.png"
            alt="About Us"
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-lg">
            La patisserie de joie is a French term meaning pastry shop of joy.
            It is a home-based bakery that specializes in hand-painted cream
            cakes and confections with a taste of heaven on earth. Stacey A.M.
            Ouma is the founder and pastry chef with a bachelor's degree in
            hotel and restaurant management and an associate's degree in baking
            and pastry management.
          </p>
          <p className="text-lg mt-4">
            Being an artist and a creative, pastry and cake is her chosen canvas
            in which she expresses the beauty of life. Previously known as Sweet
            Spirit Bakery, La Patisserie de Joie, a name inspired by her
            French-speaking husband and her classical French training, not only
            seeks to bring joy through their amazing flavors but through
            personal interactions with employees and customers.
          </p>
          <p className="text-lg mt-4">
            Joy, defined by peace and contentment in spite of the season in
            life. This is something that many people lack, and as the LPDJ team,
            they seek to spread joy in every way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
