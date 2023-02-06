import { Loader } from '@mantine/core';
import React, { useEffect, useState } from 'react';

import LandingPage from '@/ui/layouts/Landingpage';
import { supabase } from '@/utils/supabaseUtility';

const List = () => {
  const [jobsListDetails, setjobsListDetails] = useState();

  const fetchLists = async () => {
    try {
      const { data: jobs, error } = await supabase.from('jobslist').select('*');
      if (error) throw error;
      else setjobsListDetails(jobs);
    } catch (error) {
      console.log(error);
    } finally {
      setjobsListDetails([]);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  console.log(jobsListDetails);

  return jobsListDetails && jobsListDetails?.length !== 0 ? (
    <Loader />
  ) : (
    <LandingPage jobsListDetails={jobsListDetails} />
  );
};

export default List;
