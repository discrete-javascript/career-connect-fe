/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';

import { setJobLists } from '@/store/actions/joblists';

export interface IJobListsState {
  joblists: Array<string>;
}

const initialState: IJobListsState = {
  joblists: [],
};

export const joblistsReducer = createReducer(initialState, {
  [setJobLists.type]: (state, action): void => {
    state.joblists = action.payload;
  },
});

export default joblistsReducer;
