import { useState } from "react";

function Form({ getData }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setAlert(true);
    } else {
      setAlert(false);
      getData(weight, height);
    }
  };
  return (
    <div class="row">
      <div class="col-md-5 col-10 mx-auto mb-3 my-5 py-5 border shadow">
        <h3 class="text-center mb-3">BMI Calculator</h3>
        <form id="form" onSubmit={onSubmit}>
          <div class="form-group">
            <label>Weight</label>
            <input
              name=""
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="text"
              placeholder="weight in kilograms"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label>Height</label>
            <input
              name=""
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="text"
              placeholder="height in meters"
              class="form-control"
              required
            />
          </div>
          <div>
            <button type="submit" class="btn btn-primary btn-block">
              Get BMI
            </button>
          </div>
        </form>
        {alert === true ? (
          <div class="alert alert-warning" role="alert">
            You have entered wrong credentials
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Form;
