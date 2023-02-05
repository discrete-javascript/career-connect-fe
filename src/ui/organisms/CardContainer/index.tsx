import { Container, SimpleGrid } from '@mantine/core';
import React from 'react';

import type { Props } from '@/ui/layouts/Landingpage';
import { CardGradient } from '@/ui/molecules/Card';

export const ArticlesCardsGrid: React.FC<Props> = ({ jobsListDetails }) => {
  const cards =
    jobsListDetails &&
    jobsListDetails.values.map(
      (jobs: Array<string>): JSX.Element => (
        <CardGradient {...{ jobs }} key={'Title'} />
      )
    );

  return (
    <Container py="xl">
      <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
};
