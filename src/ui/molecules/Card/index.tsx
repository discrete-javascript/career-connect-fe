import { createStyles, Flex, Paper, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

import { generateRandomColorNumber } from './card.utils';
import {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  DESIGNATION,
  JOB_DESCRIPTION,
  logoLink,
} from './cardmaps';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,
    fontFamily: `SegoeUI, ${theme.fontFamily}`,

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        generateRandomColorNumber(theme),
        generateRandomColorNumber(theme)
      ),
    },
  },
}));

interface CardGradientProps {
  jobs: Array<string>;
}

export const CardGradient: React.FC<CardGradientProps> = ({ jobs: list }) => {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" className={classes.card}>
      {Array.isArray(list) ? (
        <>
          <Flex align={'center'} gap={10}>
            <Image
              src={`${logoLink}${list[COMPANY_WEBSITE]}`}
              alt="amazon logo"
              width={50}
              height={50}
            />
            <Flex direction={'column'}>
              <Text size="sm" weight={400} mt="md">
                {list[COMPANY_NAME]}
              </Text>
              <Text size="lg" weight={500} mt="md">
                {list[DESIGNATION]}
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Text size="sm" mt="sm" color="dimmed">
              {list[JOB_DESCRIPTION]}
            </Text>
          </Flex>
        </>
      ) : (
        ''
      )}
    </Paper>
  );
};
