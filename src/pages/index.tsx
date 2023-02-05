import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';

import LandingPage from '@/ui/layouts/Landingpage';
import { Meta } from '@/ui/layouts/Meta';
import type { Jobs } from '@/ui/molecules/Card/jobs.types';
import { Main } from '@/ui/templates/Main';
import { getSpreadSheetData } from '@/utils/googleUtility/spreadsheetValues';

import { store } from '../store';

export type JobsListDetails = Jobs;
export interface IIndexProps {
  jobsListDetails?: JobsListDetails;
}

const Index = ({ jobsListDetails }: IIndexProps) => {
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <Main
          meta={
            <Meta
              title="Career Connect"
              description="Career Connect | The job searching portal"
            />
          }
        >
          <LandingPage jobsListDetails={jobsListDetails} />
        </Main>
      </MantineProvider>
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
