import { Widget } from "@typeform/embed-react";

const QuizPage = () => {
  //   const { data } = useSWR(
  //     "https://mind-mate.onrender.com/api/questions",
  //     fetcher
  //   );

  return (
    <>
      <div className="h-screen">
        <Widget
          id="https://5w8jm65a1ng.typeform.com/to/cfYw4Njv"
          style={{ width: "100%", height: "100%" }}
          className="my-form"
        />
        {/* when submit redirect */}
      </div>
    </>
  );
};

export default QuizPage;
