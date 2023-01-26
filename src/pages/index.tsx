import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { Meta } from '@/ui/layouts/Meta';
import Banner from '@/ui/organisms/Banner';
import { Main } from '@/ui/templates/Main';
import { getSpreadSheetData } from '@/utils/googleUtility/spreadsheetValues';

import { store } from '../store';

export interface IIndexProps {
  jobsListDetails?: Array<object>;
}

const Index = ({ jobsListDetails }: IIndexProps) => {
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
          <Banner jobsListDetails={jobsListDetails} />
        </Main>
      </ChakraProvider>
    </Provider>
  );
};

export async function getServerSideProps() {
  const jobListsDetailsFromGoogle = await getSpreadSheetData();

  return {
    props: {
      jobsListDetails: jobListsDetailsFromGoogle,
    },
  };
}

export default Index;
