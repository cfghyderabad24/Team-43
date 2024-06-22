import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Divider,
  List,
  ListItem,
} from "@chakra-ui/react"; 

const OrderHistoryComponent = () => {
 
  const [orders, setOrders] = useState([]);

   useEffect(() => {
     const fetchOrders = async () => {
       const response = await fetch('/api/orders');
      const data = await response.json();
      setOrders(data); 
    };

    fetchOrders();
  }, []);

  return (
    <Container maxW="container.xl" py={8}>
      <Stack spacing={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Order History
        </Heading>
        {orders.length === 0 ? (
          <Text>No orders found.</Text>
        ) : (
          orders.map((order, index) => (
            <Box key={index} bg="white" boxShadow="md" p={4} borderRadius="md">
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Order ID: {order.orderId}
              </Text>
              <Text color="gray.600" mb={2}>
                Date: {order.date}
              </Text>
              <Divider my={2} />
              <List spacing={2}>
                {order.items.map((item, idx) => (
                  <ListItem key={idx}>
                    {item.quantity} x {item.name}
                  </ListItem>
                ))}
              </List>
              <Text mt={2}>
                Total: ${order.total.toFixed(2)}
              </Text>
            </Box>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default OrderHistoryComponent;
