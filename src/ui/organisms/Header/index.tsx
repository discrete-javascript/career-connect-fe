import {
  ActionIcon,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import {
  BrandLinkedin,
  BrandTelegram,
  BrandWhatsapp,
} from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

interface HeaderMiddleProps {
  links?: { link: string; label: string }[];
}

export const HeaderMiddle: React.FC<HeaderMiddleProps> = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Header height={56} mb={40}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />

        <Title order={4} color={'#228be6'}>
          Career Connect
        </Title>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandWhatsapp size={18} color={'black'} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandTelegram size={18} color={'black'} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandLinkedin size={18} color={'black'} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};
