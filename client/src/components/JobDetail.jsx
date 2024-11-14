// src/components/JobDetail.js
import React from 'react';

function JobDetail({ job }) {
  let a = 1;
  return (
    <div>
      <h2 className="mt-3 mb-4">{job.title} - {job.company}</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{job.location}</h5>
          <p className="card-text">{job.description}</p>
          <button>{
            a ?"test one" : "tesst 0"
          }</button>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
