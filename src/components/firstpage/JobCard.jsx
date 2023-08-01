import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";


const JobCard = ({ jobData }) => {

  const { id, image, title, company, workType, workingTime, location, salary } =
    jobData;
  const handleViewBookDetail = () => {
  localStorage.setItem("viewBookDetail",JSON.stringify(jobData))
  };

  return (
    <div className="border-2 rounded-xl p-5  flex flex-col gap-4 ">
      <div className="">
        <img src={image} alt="" />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <h4 className="text-xl text-gray-500">{company}</h4>
      <div>
        <button className="btn-outline">{workType}</button>
        <button className="btn-outline">{workingTime}</button>
      </div>
      <div className="flex gap-5 text-gray-400">
        <span className="flex justify-center items-center">
          <FaLocationDot></FaLocationDot>
          {location}
        </span>
        <span className="flex justify-center items-center ">
          <FaDollarSign></FaDollarSign>
          {salary}
        </span>
      </div>
      <Link to={`../viewJobsDetail/${id}`}>
        <button
          className="btn-primary w-max"
          onClick={handleViewBookDetail}
        >
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
