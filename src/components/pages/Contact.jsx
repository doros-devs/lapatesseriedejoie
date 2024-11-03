import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 mt-14">
      <p className="text-lg mb-8 text-center">
        <span className="font-bold">
          In order to process your order, kindly share with us the following
          information in the message section:
        </span>
        <br />
        <br />
        Cake flavor | Number of kgs | Message on the cake| Date of delivery |{" "}
        <br />
        Time of delivery | Mobile number of contact person | Payment
        confirmation message
      </p>
      <div className="flex flex-col lg:flex-row flex-wrap mt-20 gap-8">
        <div className="flex-1">
          <img
            src="/images/contact-image.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="text-lg mb-8 flex-1 mx-auto lg:text-center">
          <h2 className="font-bold mb-4 text-center">Get In Touch</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:lapatisseriedejoie@gmail.com"
              className="text-blue-600 hover:text-blue-400"
            >
              lapatisseriedejoie@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+254743272398"
              className="text-blue-600 hover:text-blue-400"
            >
              +254743272398
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/lapatisseriedejoie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400"
            >
              La Patesserie De Joie
            </a>
            <br />
            Whatsapp:{" "}
            <a
              href="https://wa.me/+254743272398"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-400"
            >
              Whatsapp Number
            </a>
          </p>
          <p>
            <span className="font-bold">Till Number</span> : 5381069
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
