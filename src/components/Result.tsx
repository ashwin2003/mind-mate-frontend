import React from "react";
import Header from "./Header";

const Result = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <Header />
        <div className="container px-5 py-24 mx-auto">
          <div className=" flex flex-col text-center w-full mb-20">
            <h2 className="text-md text-secondary tracking-widest font-medium title-font mb-1">
              MENTAL ASSESMENT RESULT
            </h2>
            {/* <h1 className="sm:text-xs text-2xl font-medium title-font mb-4 text-gray-900">
                  Dear RAHUL
                </h1> */}
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              As per your response in assesment below are possible mental
              disorder you maybe facing
            </p>
          </div>
          <div className="  flex flex-wrap justify-center align-middle">
            {data.map((item: any) => (
              <div className="shadow m-4   xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                  {item.disorder} Disorder
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Symptoms, Steps to control and more info
                </p>
                <a
                  className="text-primary inline-flex items-center"
                  href={`/info/${item._id}`}
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;
