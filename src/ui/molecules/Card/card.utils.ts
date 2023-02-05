import type { DefaultMantineColor, MantineTheme } from '@mantine/core';

const colors = [
  'dark',
  'gray',
  'red',
  'pink',
  'grape',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'green',
  'lime',
  'yellow',
  'orange',
  'teal',
] as DefaultMantineColor[];

export const generateRandomColorNumber = (theme: MantineTheme): string => {
  const colorIndex = Math.floor(Math.random() * colors.length) ?? (0 as number);
  const color =
    colors[colorIndex] !== undefined
      ? colors[colorIndex]
      : ('blue' as DefaultMantineColor);
  const number = Math.floor(Math.random() * 10) as number;
  // @ts-ignore
  return theme.colors[color][number];
};
