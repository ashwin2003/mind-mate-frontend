import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer Token tfp_D2W1GTfvmwRQnmZVLjwiVvsRcbCvnfFAY6LjMsMkCDqk_3pf1FdUX1Q5crY`,
      },
    })
    .then((res) => res.data);

const ResultPage = () => {
  const { data } = useSWR(
    "https://api.typeform.com/forms/cfYw4Njv/https://api.typeform.com/forms/cfYw4Njv/responses?included_response_ids=f53pg5yex1du6pxhwq7f53pgnt84gvei",
    fetcher
  );

  return <>{JSON.stringify(data)}</>;
};

export default ResultPage;
