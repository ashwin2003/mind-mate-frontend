import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/Header";
import { useRouter } from "next/router";

function Resultpage() {
  const [data, setData] = useState(null);
  const [did, setDid] = useState("");
  const router = useRouter();
  const id = router.query.id as string;
  console.log(id);

  const getDisorderInfo = async () => {
    try {
      const { data: rdata } = await axios.get(
        `https://mind-mate.onrender.com/api/disorder/info/${id}`
      );
      console.log(rdata);
      setData(rdata[0]);
    } catch (error) {}
  };

  //   const test = rdata.disorder;

  useEffect(() => {
    setDid(id);
  }, []);

  useEffect(() => {
    if (data) return;
    getDisorderInfo();
  }, [id]);

  return !data ? (
    <div className="flex items-center flex-col mt-40 justify-center text-xl">
      <h1>"There is hope, even in the darkest of times."</h1>
      <br />
      <p> Loading...</p>
    </div>
  ) : (
    <div>
      <Header />
      <section className="text-gray-600 body-font mt-8">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-5/6 h-3/6 ml-16"
              alt="hero"
              src={
                data?.images
                  ? data?.images[0]
                  : "https://media.istockphoto.com/id/1044233906/vector/mental-health-vector-illustration.jpg?s=612x612&w=0&k=20&c=oRXiKu2aEuMoiD1XVFeRaOafAv5c4is55rxX38TAkjc="
              }
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data?.disorder} Disorder
            </h1>
            <p className="mb-4 leading-relaxed max-w-xl">{data?.description}</p>

            <div className="flex justify-center">
              {/* <button className=" inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
                Know More
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-24 mx-auto flex-wrap">
          <div className="flex  justify-center  flex-wrap -m-4">
            <div className="p-4 lg:w-1/2 md:w-full">
              {/* BOX 1 */}
              <div className="flex  border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                    POSSIBLE SYMOTOMS
                  </h2>
                </div>
              </div>

              {data?.symptoms?.length > 0 &&
                data.symptoms.map((item) => (
                  <div className=" mt-4 shadow rounded p-6 flex  flex-grow">
                    <div className=" mr-4 flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-black relative z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>

                    <p className="leading-relaxed text-base">{item}</p>
                  </div>
                ))}

              {/* sym ENDS */}
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-row justify-center  flex-wrap w-full ">
            <div className=" bg-white rounded-md shadow-md p-10 lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {data?.steps?.length > 0 &&
                data?.steps.map((item) => (
                  <div className=" flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        {item?.name}
                      </h2>
                      <p className="leading-relaxed">{item?.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              GET HELP FROM OUR TRUSTED FOUNDATIONS
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Vandrevala Foundation
                  </h2>
                  <p className="text-gray-500">+91 9999 666 555</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Smile Foundation
                  </h2>
                  <p className="text-gray-500">080-23655557</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Voice That Cares
                  </h2>
                  <p className="text-gray-500">8448-8448-45</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Mitram Foundation
                  </h2>
                  <p className="text-gray-500">080 2572 2573</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Suicide Prevention
                  </h2>
                  <p className="text-gray-500">080-23655557</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Voice That Cares
                  </h2>
                  <p className="text-gray-500">8448-8448-45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resultpage;
