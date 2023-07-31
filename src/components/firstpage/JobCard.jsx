import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
const JobCard = ({ jobData }) => {
  const { id, image, title, company, workType, workingTime, location, salary } =
    jobData;
  return (
    <div className="border-2 rounded-xl p-5  flex flex-col gap-4 ">
      <div className="">
        <img src={jobData.image} alt="" />
      </div>
      <h3 className="text-2xl font-semibold">{jobData.title}</h3>
      <h4 className="text-xl text-gray-500">{jobData.company}</h4>
      <div>
        <button className="btn-outline">{jobData.workType}</button>
        <button className="btn-outline">{jobData.workingTime}</button>
      </div>
      <div className="flex gap-5 text-gray-400">
        <span className="flex justify-center items-center">
          <FaLocationDot></FaLocationDot>
          {jobData.location}
        </span>
        <span className="flex justify-center items-center ">
          <FaDollarSign></FaDollarSign>
          {jobData.salary}
        </span>
      </div>
      <button className="btn-primary w-max">View Detail</button>
    </div>
  );
};

export default JobCard;
