import { Button, Container, createStyles, Text, Title, Modal, Group, Checkbox, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingBottom: 40,

    '@media (max-width: 755px)': {
      paddingTop: 40,
      paddingBottom: 60,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color:
      // @ts-ignore
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  description: {
    textAlign: 'center',
    fontWeight: 'normal',

    '@media (max-width: 520px)': {
      textAlign: 'left',
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      height: 42,
      fontSize: theme.fontSizes.md,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));



export function HeroText() {
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      skills: 'All',
      requiredYearsOfExeperience: 0,
      location: 'All'
    },

    validate: {
      requiredYearsOfExeperience: (value) => Number.isInteger(value) ? null : 'years of experience should be a number'
    }
  });

  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          We Connect{' '}
          <Text component="span" className={classes.highlight} inherit>
            Your
          </Text>{' '}
          Future
        </Title>

        <Container p={0} size={600}>
          <Title
            order={3}
            size="lg"
            color="dimmed"
            className={classes.description}
          >
            Find your next career opportunity with career connect and discover
            jobs from top employers and advance your career today
          </Title>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={open}
          >
            Start Searchings
          </Button>
          <Modal opened={opened} onClose={close} title="Filter By">
        <TextInput
          label="Skill"
          placeholder="mention your core skill"
          {...form.getInputProps('skills')}
        />
        <TextInput
          
          label="requiredYearsOfExeperience"
          placeholder="years of experience"
          {...form.getInputProps('requiredYearsOfExeperience')}
        />
        <TextInput
          label="location"
          placeholder="location"
          {...form.getInputProps('location')}
        />

        

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
 
          </Modal>
        </div>
      </div>
    </Container>
  );
}
