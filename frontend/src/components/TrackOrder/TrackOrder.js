// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';
// import ReceiptIcon from '@mui/icons-material/Receipt';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import DoneIcon from '@mui/icons-material/Done';
// import Typography from '@mui/material/Typography';
// import 'leaflet/dist/leaflet.css';
// import './TrackOrder.css'; // Assuming you have this CSS in a separate file

// const MyTimeline = () => {
//   return (
//     <Timeline position="alternate">
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           align="right"
//           variant="body2"
//           color="text.secondary"
//         >
//           20-05-2024
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot>
//             <ReceiptIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Donation Successful
//           </Typography>
//           <Typography>Your support is received by the organization</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           variant="body2"
//           color="text.secondary"
//         >
//           15-06-2024
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary">
//             <LocationOnIcon />
//           </TimelineDot>
//           <TimelineConnector />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Location Confirmed
//           </Typography>
//           <Typography>It's going to be distributed at Nalgonda High School.</Typography>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelineOppositeContent
//           sx={{ m: 'auto 0' }}
//           align="right"
//           variant="body2"
//           color="text.secondary"
//         >
//           23-06-2024
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineConnector />
//           <TimelineDot color="primary" variant="outlined">
//             <DoneIcon />
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//         </TimelineSeparator>
//         <TimelineContent sx={{ py: '12px', px: 2 }}>
//           <Typography variant="h6" component="span">
//             Distribution Completed
//           </Typography>
//           <Typography>We distributed 12 pads and 5 cups.</Typography>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// };

// const TrackOrder = () => {
//   return (
//     <div className="container">
//       <div className="timeline">
//         <MyTimeline />
//       </div>
//       <div className="TrackOrder">
//         <h2>Track Your Order</h2>
//         <MapContainer center={[28.7041,77.1025]} zoom={13} className="leaflet-container">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[17.0577, 79.2684]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default TrackOrder;





import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TrackOrder.css';
import axios from 'axios';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import Typography from '@mui/material/Typography';

// Leaflet requires icons to be set up separately
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const customerLocation = [17.4065,78.4772]; // Example coordinates for the customer's location
const hotelLocation = [17.0577, 79.2684]; // Example coordinates for the hotel

const MyTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          20-05-2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ReceiptIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Donation Successful
          </Typography>
          <Typography>Your support is received by the organization</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          15-06-2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LocationOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Location Confirmed
          </Typography>
          <Typography>It's going to be distributed at Nalgonda High School.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          23-06-2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <DoneIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Distribution Completed
          </Typography>
          <Typography>We distributed 12 pads and 5 cups.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

function TrackOrder() {
  const [deliveryBoyLocation, setDeliveryBoyLocation] = useState(hotelLocation);
  const [route, setRoute] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the route from OpenRouteService
    const fetchRoute = async () => {
      const apiKey = '5b3ce3597851110001cf624819ba56b07d4c4067b416d05c9df8643f';
      const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${hotelLocation[1]},${hotelLocation[0]}&end=${customerLocation[1]},${customerLocation[0]}`;

      try {
        const response = await axios.get(url);
        const coordinates = response.data.features[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        setRoute(coordinates);
        setDeliveryBoyLocation(coordinates[0]); // Start at the first point of the route
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchRoute();
  }, []);

  useEffect(() => {
    if (route.length > 0 && currentIndex < route.length) {
      // Move the delivery boy along the route
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex < route.length - 1) {
            setDeliveryBoyLocation(route[prevIndex + 1]);
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [route, currentIndex]);

  return (
    <div className='flex'>
      <div><MyTimeline/></div>
      <div className="TrackOrder">
      <h2>Track Your Order</h2>
      <MapContainer center={customerLocation} zoom={13} scrollWheelZoom={false} style={{ height: "500px",width:"50vw"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={customerLocation}>
          <Popup>
            Customer's Location
          </Popup>
        </Marker>
        <Marker position={hotelLocation}>
          <Popup>
            Hotel Location
          </Popup>
        </Marker>
        <Marker position={deliveryBoyLocation}>
          <Popup>
            Delivery Boy's Location
          </Popup>
        </Marker>
        {route.length > 0 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
    </div>
    
  );
}

export default TrackOrder;