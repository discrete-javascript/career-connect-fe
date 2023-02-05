import { Center, Title } from '@mantine/core';
import React from 'react';

import { HeroText } from '@/ui/molecules/HeroSection';
import { ArticlesCardsGrid } from '@/ui/organisms/CardContainer';
import { HeaderMiddle } from '@/ui/organisms/Header';

import type { JobsListDetails } from '../../../pages/index';

export type Props = {
  jobsListDetails?: JobsListDetails;
};

const LandingPage: React.FC<Props> = ({ jobsListDetails }) => {
  return (
    <>
      <HeaderMiddle />
      <HeroText />
      <Center>
        <Title order={4}>Here are the refined list</Title>
      </Center>
      <ArticlesCardsGrid jobsListDetails={jobsListDetails} />
    </>
  );
};

export default LandingPage;
