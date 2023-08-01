
const ViewJobDetail = () => {
  let storedInfo=localStorage.getItem("viewBookDetail")
  storedInfo=JSON.parse(storedInfo)
    
    const {title,company,salary,location,workType,workingTime,jobResponsibility,jobDescription,education,experience,phone,email}=storedInfo
  console.log(storedInfo);
  return <div className="my-10"> 
    <section ><img src="/public/images/bg-job.jpg" alt=""  />
    <h2 className="text-center text-5xl font-bold uppercase my-10 ">Job Details</h2>
    </section>
    <section>
      <div className="flex justify-between flex-col md:flex-row">
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
        <div className="text-xl bg-purple-200 p-5 flex flex-col gap-5">
          <h1 className="font-bold border-b-4 border-white">Job Details</h1>
          <div><span></span><span className="font-bold">Salary : </span><span className="text-gray-500">$ {salary}</span></div>
          <div><span></span><span className="font-bold">Job Title : </span><span className="text-gray-500">{title}</span></div>
          <h1 className="font-bold border-b-4 border-white">Contact Information</h1>
          <div><span></span><span className="font-bold">Phone : </span><span className="text-gray-500">{phone}</span></div>
          <div><span></span><span className="font-bold">Email : </span><span className="text-gray-500">{email}</span></div>
          <div><span></span><span className="font-bold">Address : </span><span className="text-gray-500">{location}</span></div>
          <button className="btn-primary">Apply Now</button>
        </div>
      </div>
    </section>
  </div>;
};

export default ViewJobDetail;
