const ResultTODOs = (props: any) => {
  const getStatus = (status: boolean) => {
    return status ? "Done" : "Not Done";
  };

  return (
    <>
      <p>
        Status for your TODO {props?.todo?.title} is{" "}
        {getStatus(props?.todo?.completed)}
      </p>
    </>
  );
};

export default ResultTODOs;
