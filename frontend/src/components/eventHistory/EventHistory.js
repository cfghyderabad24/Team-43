import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ imageUrl, title, subtitle, recipients,products_donated,budget_used }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{subtitle}</p>
        <p className="text-gray-700 text-base mt-2"><strong>No. of recipients served :</strong> {recipients}</p>
        <p className="text-gray-700 text-base mt-2"><strong>No. of products donated :</strong></p>
        <p className="text-gray-700 text-base mt-2 px-5"><strong>Pads :</strong> {products_donated.pads}</p>
        <p className="text-gray-700 text-base mt-2 px-5"><strong>Cups :</strong> {products_donated.cups}</p>
        <p className="text-gray-700 text-base mt-2"><strong>Budget Used :</strong> {recipients}</p>
      </div>
    </div>
  );
};

const CardList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/admin/events"
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {events.map((event) => (
        <Card
          key={event._id} // Assuming your event object has an _id field
          imageUrl={event.avatar}
          title={event.eventname}
          subtitle={`${new Date(event.date).toLocaleDateString()} - ${event.address}`}
          recipients={event.recipients}
          products_donated={event.products_donated}
          budget_used={event.budget_used}
        />
      ))}
    </div>
  );
};

export default CardList;
