import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { Meta } from '@/ui/layouts/Meta';
import Banner from '@/ui/organisms/Banner';
import { Main } from '@/ui/templates/Main';

import { store } from '../store';

const Index = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Main
          meta={
            <Meta
              title="Career Connect"
              description="Career Connect | The job searching portal"
            />
          }
        >
          Career Connect | Job Search Portal
          <Banner />
        </Main>
      </ChakraProvider>
    </Provider>
  );
};

export default Index;
