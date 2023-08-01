// import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
const JobApplied = () => {
  let jobDatas = localStorage.getItem("bookmarks-cart");
  jobDatas = JSON.parse(jobDatas);
  console.log(jobDatas);
  return (
    <div>
      <section>
        <img src="/public/images/bg-3.jpg" alt="" />
        <h2 className="text-center text-5xl font-bold uppercase my-10 ">
          Job You Have Applied
        </h2>
      </section>
      <section>
        <div>
          <h1>{jobDatas.length}</h1>
          {jobDatas.map((data, arrId) => (
            <div key={arrId}>
              <h1>Hi</h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobApplied;
