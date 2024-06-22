import React from "react";

const Card = ({ imageUrl, title, subtitle, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 1",
      subtitle: "Subtitle 1",
      description: "Description for Card 1.",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 2",
      subtitle: "Subtitle 2",
      description: "Description for Card 2.",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/300",
      title: "Card 3",
      subtitle: "Subtitle 3",
      description: "Description for Card 3.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;