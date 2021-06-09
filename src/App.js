import './App.css';
import { Box, Container } from "@chakra-ui/react";

function App() {
  return (
    <>
    <Container minW="7xl" h="100vh" bg={{base:"red", md:"green", lg:"blue"}} padingX={ {base: "7", md: "20", lg: "20"}}>
      <Box as="section" bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </Container>
    </>
  );
}

export default App;