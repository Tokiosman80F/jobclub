import {
  MdAccountBalance,
  MdLightbulbOutline,
  MdEngineering,
} from "react-icons/md";
import { SiMarketo } from "react-icons/si";
const JobCatagory = () => {
  const jobCategory = [
    {
      image: <MdAccountBalance size={30} color="purple" />,
      name: "Account & Finance",
      number: 300,
    },
    {
      image: <MdLightbulbOutline size={30} color="purple" />,
      name: "Creative Design",
      number: 100,
    },
    {
      image: <SiMarketo size={30} color="purple" />,
      name: "Marketing & Sales",
      number: 200,
    },
    {
      image: <MdEngineering size={30} color="purple" />,
      name: "Engineering Job",
      number: 150,
    },
  ];
  return (
    <div className="flex flex-col ">
      <h1 className="text-4xl md:text-6xl text-center my-14 font-semibold">
        Job Category List
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        {jobCategory.map((job, id) => (
          <div
            key={id}
            className="border-2 rounded-lg p-5 bg-purple-100 w-full  "
          >
            <div>{job.image}</div>
            <h2 className="text-xl font-semibold my-5">{job.name}</h2>
            <p className="text-gray-500">{job.number}++ Job Available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCatagory;
