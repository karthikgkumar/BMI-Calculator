function BmiScore({ bmiNo, bmiName, changeWeight }) {
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score</div>
      <div className="row justify-content-md-center">
        <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {bmiNo}
        </div>
      </div>
      <div className="fs-3 fw-bold text-primary">{bmiName}</div>
      {changeWeight.type === "positive" && (
        <div className="fs-4">
          "You need to lose{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "negative" && (
        <div className="fs-4">
          "You need to gain{" "}
          <span className="fw-bold">{changeWeight.weight} kg"</span>{" "}
        </div>
      )}
      {changeWeight.type === "normal" && (
        <div className="fs-4">"You weight is Normal,Good for you" </div>
      )}
    </div>
  );
}

export default BmiScore;
