import { useState } from "react";
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const JobApplied = () => {
  let jobDatas = localStorage.getItem("bookmarks-cart");
  jobDatas = JSON.parse(jobDatas);
  console.log(jobDatas);
  // const [dataLength, setDataLength] = useState(0);
  return (
    <div>
      <section>
        <img src="/public/images/bg-3.jpg" alt="" />
        <h2 className="text-center text-3xl md:text-5xl font-bold uppercase my-10 ">
          JOB U have applied
        </h2>
      </section>
      <section className="mb-28 text-right">
        <button className="btn-outline">
          Fliter <FaAngleDown className="inline-block" />
        </button>
      </section>
      <section>
        <div>
          <div className="flex flex-col gap-4 md:gap-11 ">
            {!jobDatas ? (
              <h1>Nothing here </h1>
            ) : (
              jobDatas.map((data) => (
                <div
                  key={data.id}
                  className="flex flex-col md:flex-row items-center justify-around border-2 md:p-2 "
                >
                  <div className="w-1/2 md:w-1/4">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold">{data.title}</h3>
                    <h4 className="text-xl text-gray-500">{data.company}</h4>
                    <div>
                      <button className="btn-outline">{data.workType}</button>
                      <button className="btn-outline">
                        {data.workingTime}
                      </button>
                    </div>
                    <div className="flex gap-5 text-gray-400">
                      <span className="flex justify-center items-center">
                        <FaLocationDot></FaLocationDot>
                        {data.location}
                      </span>
                      <span className="flex justify-center items-center ">
                        <FaDollarSign></FaDollarSign>
                        {data.salary}
                      </span>
                    </div>
                  </div>
                  {/* button */}
                  <Link to={`../viewJobsDetail/${jobDatas.id}`}>
                    <button className="btn-primary w-max">View Detail</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobApplied;
