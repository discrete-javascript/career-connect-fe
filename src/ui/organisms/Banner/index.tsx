import { useEffect } from 'react';

import type { IIndexProps } from '@/pages';
import { useAppDispatch, useAppSelector } from '@/store/useStore';

import { setJobLists } from '../../../store/actions/joblists';

const Banner: React.FC<IIndexProps> = ({ jobsListDetails }) => {
  const dispatch = useAppDispatch();
  const jobListing = useAppSelector((state) => state.jobLists);

  console.log(jobListing);

  useEffect(() => {
    dispatch(setJobLists(jobsListDetails));
  }, []);

  return <>{JSON.stringify(jobListing)}</>;
};

export default Banner;
