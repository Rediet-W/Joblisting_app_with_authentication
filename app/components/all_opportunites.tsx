import React from "react";
import { useGetAllOpportunitiesQuery } from "../../services/sliceApi";
import { JobPost } from "../type";

const OpportunitiesCard = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useGetAllOpportunitiesQuery();
  if (error) return;
  <div className="flex items-center justify-center h-screen">
    <div className="flex-col">
      <h1 className="font-poppins font-black text-2xl text-[rgba(37,50,75,1)] text-center">
        {" "}
        Error Loading{" "}
      </h1>
      <img src="/error.png" className="bg-center" />
    </div>
  </div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col">
          <h1 className="font-poppins font-black text-2xl text-[rgba(37,50,75,1)] text-center">
            {" "}
            Loading{" "}
          </h1>
          <img src="../loading.png" className="bg-center" />
        </div>
      </div>
    );
  console.log(data);
  if (!data) return <div>No data</div>;

  const job = data?.data[id] as JobPost;

  return (
    <>
      <div
        key={job.id}
        className="border bg-white p-4 flex rounded-lg border-inherit m-4"
      >
        <div className="w-1/4">
          <img
            src={job?.logoUrl || "https://placehold.co/70x74"}
            alt="job avatar"
            className="h-1/3 w-1/2 rounded-full ring-2 ring-white"
          />
        </div>
        <div className="w-3/4">
          <a
            href={`/${job.id}`}
            className="font-Epilogue font-semibold text-xl"
          >
            {job.title}
          </a>
          <p className="flex font-Epilogue font-normal text-[rgba(124,132,147,1)]">
            <p>{job.orgName}</p>
            <div className="px-1"> . </div>
            {job.location.map((loc: string) => (
              <p className="pl-2">{loc}</p>
            ))}
          </p>
          <p className="font-normal font-Epilogue text-[rgba(37,50,75,1)]">
            {job.description}
          </p>
          <div className="flex">
            {job.opType == "inPerson" ? (
              <p className="inline-block bg-[rgba(86,205,173,0.1)] text-[rgba(86,205,173,1)] font-Epilogue font-semibold py-1 px-3 w-fit  rounded-full m-2 bg-center">
                {" "}
                {job.opType}
              </p>
            ) : (
              <p className="inline-block bg-[rgba(255,54,54,0.1)] text-[#ff3636] font-Epilogue font-semibold py-1 px-3 w-fit  rounded-full m-2">
                {" "}
                {job.opType}
              </p>
            )}
            <div className="h-7 w-[1px] m-2 mt-3 bg-gray-300"></div>
            <p className="inline-block bg-transparent  text-[rgba(255,184,54,1)] font-Epilogue font-semibold py-1 px-3 w-fit border border-[rgba(255,184,54,1)] rounded-full m-2">
              Education{" "}
            </p>
            <p className="inline-block bg-transparent text-indigo-500 font-Epilogue font-semibold py-1 px-3 w-20 border border-indigo-500 rounded-full m-2 text-center">
              {" "}
              IT
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpportunitiesCard;
