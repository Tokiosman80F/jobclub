import { FaMapMarkerAlt,FaDollarSign,FaPhoneAlt,FaRegEnvelope,FaCalendarWeek } from "react-icons/fa";
import { FaLocationPinLock, FaSackDollar } from "react-icons/fa6";
const ViewJobDetail = () => {
  let storedInfo=localStorage.getItem("viewBookDetail")
  storedInfo=JSON.parse(storedInfo)
    
    const {title,salary,location,jobResponsibility,jobDescription,education,experience,phone,email}=storedInfo
  console.log(storedInfo);
  return <div className="my-10 px-5 md:px-0"> 
    <section ><img src="/public/images/bg-job.jpg" alt=""  />
    <h2 className="text-center text-5xl font-bold uppercase my-10 ">Job Details</h2>
    </section>
    <section>
      <div className="flex justify-between flex-col gap-5 md:flex-row">
        {/* description */}
        <div className="text-xl flex flex-col gap-5">
          <div>
          <span className="font-bold">Job Description:</span><span className="text-gray-500">{jobDescription}</span>
          </div>

          <div>
            <span className="font-bold">Job Responsibility:</span><span className="text-gray-500">{jobResponsibility}</span>
            </div>
          <div>
            <span className="font-bold">Educational Requirements:</span>
          <p className="text-gray-500">{education}</p>
          </div>
          <div>
            <span className="font-bold">Experiences:</span>
          <p className="text-gray-500">{experience} years in this field</p></div>
        </div>
        {/* info */}
        <div className="text-xl bg-purple-200 p-6 flex flex-col gap-5 md:w-1/2">
          <h1 className="font-bold border-b-4 border-white">Job Details</h1>
          <div className="flex gap-2  items-center"><FaSackDollar/><span className="font-bold">Salary:</span><span className="text-gray-500">$ {salary}</span></div>
          <div className="flex gap-2 items-center"><FaCalendarWeek/><span className="font-bold">Job Title:</span><span className="text-gray-500">{title}</span></div>
          <h1 className="font-bold border-b-4 border-white">Contact Information</h1>
          <div className="flex gap-2 items-center"><FaPhoneAlt/><span className="font-bold">Phone:</span><span className="text-gray-500">{phone}</span></div>
          <div className="flex gap-2 items-center"><FaRegEnvelope></FaRegEnvelope>
          <span className="font-bold">Email:</span><span className="text-gray-500">{email}</span></div>
          <div className="flex gap-2 items-center"> <FaLocationPinLock></FaLocationPinLock><span className="font-bold">Address:</span><span className="text-gray-500">{location}</span></div>
          <button className="btn-primary">Apply Now</button>
        </div>
      </div>
    </section>
  </div>;
};

export default ViewJobDetail;
