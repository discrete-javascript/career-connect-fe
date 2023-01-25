import { ChakraProvider } from '@chakra-ui/react';

import { Meta } from '@/ui/layouts/Meta';
import { Main } from '@/ui/templates/Main';

const Index = () => {
  return (
    <ChakraProvider>
      <Main
        meta={
          <Meta
            title="Career Connect"
            description="Career Connect | The job searching portal"
          />
        }
      >
        Career Connect
      </Main>
    </ChakraProvider>
  );
};

export default Index;
