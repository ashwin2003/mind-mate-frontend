import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import axios from "axios";

function Resultpage() {
  const router = useRouter();
  const query = router.query;
  const [body, setBody] = useState({});
  console.log(query, body);

  const getResults = async () => {
    console.log(body);

    try {
      const { data } = await axios.post(
        "https://mind-mate.onrender.com/api/disorder/get",
        query,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;

    getResults();
  }, [router.isReady]);

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
            <div className="shadow m-4   xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-primary inline-flex items-center">
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
            <div className="  m-4 shadow xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-primary inline-flex items-center">
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

            <div className="shadow m-4  xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-primary inline-flex items-center">
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
          </div>
          {/* <button className="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg">
            Download Result
          </button> */}
        </div>
      </section>
    </div>
  );
}

export default Resultpage;
