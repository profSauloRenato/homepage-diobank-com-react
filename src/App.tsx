import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { LButton } from './components/Button'
import { Card } from './components/Card';
import { login } from './services/login';

function App() {
  return (
    <ChakraProvider>
      <Card>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <LButton />
        </Center>
      </Card>
      {/* <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          
        </Box>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
