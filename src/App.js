import React from "react";
import { Text, Box } from "@chakra-ui/react";
import TableComponent from "./components/Table";

const App = () => {
  return (
    <Box textAlign="center" mt={5}>
      <Text
        as="h1"
        fontSize="3xl"
        textAlign="center"
        textDecoration="underline"
      >
        Table Using Chakra-UI
      </Text>
      <TableComponent />
    </Box>
  );
};

export default App;
