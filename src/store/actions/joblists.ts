import { createAction } from '@reduxjs/toolkit';

export const setJobLists = createAction('SET_JOB_LISTS', (data) => ({
  payload: {
    ...data,
  },
}));
