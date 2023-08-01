import { useContext, useState } from "react";
import { JobCircularContext } from "../../App";

import JobCard from "./JobCard";

const FeaturedJob = () => {
  const [viewAll, setViewAll] = useState(true);
  const jobDatas = useContext(JobCircularContext);
  console.log("Job data from FJ", jobDatas);
  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  return (
    <div className="my-10">
      <div className="text-center mb-5">
        <h1 className="text-4xl md:text-6xl text-center my-14 font-semibold">
          Featured Job
        </h1>
        <p className="text-gray-500 text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      {/* ------JOB Card--------- */}
      <div className="grid gap-8  mb-8 md:grid-cols-2 ">
        {jobDatas.slice(0, viewAll ? 4 : 10).map((jobData) => (
          <JobCard key={jobData.id} jobData={jobData}></JobCard>
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn-primary "
          onClick={() => {
            handleViewAll();
          }}
        >
          {viewAll ? "View All" : "View Less"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
