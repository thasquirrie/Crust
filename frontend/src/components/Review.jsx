import React from 'react';
import BusinessDetails from './BusinessDetails';
import FormationDocuments from './FormationDocuments';

const Review = () => {
  return (
    <div className='col-span-8 space-y-5'>
      <BusinessDetails />
      <FormationDocuments />
    </div>
  );
};

export default Review;
