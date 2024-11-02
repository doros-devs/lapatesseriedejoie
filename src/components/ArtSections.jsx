import React from 'react';
import { v4 as uuidv4 } from "uuid";

const artSections = [
  {
    title: 'The Wave of Art',
    content: 'Art, like a wave, flows where the strokes lead, it creates its own symphony, with each bristle forming perfect harmony.',
    image: '/images/art-wave.png',
    reverse: false,
  },
  {
    title: 'The Music of Art',
    content: 'Art, like Music, is different techniques coming together to create a masterpiece.',
    image: '/images/art-music.png',
    reverse: true,
  },
  {
    title: 'The Life of Art',
    content: "Art, is like life, when you begin you do not know where the journey will take you, but it's always beautiful.",
    image: '/images/art-life.png',
    reverse: false,
  },
  {
    title: 'The Food of Art',
    content: 'Art, like food, is subjective, it will evoke different emotions every time.',
    image: '/images/art-food.png',
    reverse: true,
  },
  {
    title: 'The Color of Art',
    content: 'Art, like color, is a spectrum that brightens whatever it touches, giving life to whatever path it crosses.',
    image: '/images/art-color.png',
    reverse: false,
  },
  {
    title: 'What is Art?',
    content: 'Art, like the only constant thing in life is change. Its dynamics and eclectic, it comes in different ways of expression, and ours is through the flavors that entice your senses, the colors that brighten your day, the painted strokes that inspire symphony, and the love for you that brings Joie.',
    image: '/images/art-definition.png',
    reverse: true,
  },
];

const ArtSections = () => {

return (
    <div className="container mx-auto p-4 mt-10">
        {artSections.map((section) => (
            <div key={uuidv4()} className={`flex flex-col md:flex-row ${section.reverse ? 'md:flex-row-reverse' : ''} items-center mb-16`}>
                <div className="md:w-1/2 p-4">
                    <img src={section.image} alt={section.title} className="w-full rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                    <p className="text-lg">{section.content}</p>
                </div>
            </div>
        ))}
    </div>
);
};

export default ArtSections;
