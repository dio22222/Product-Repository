const Furniture = (props) => {
  return (
    <>
    <div className="mb-3">
      <label htmlFor="height" className="form-label">Height (CM)</label>
      <input type="text" className={`form-control ${!props.inputIsValid.height && props.inputWasTouched.height ? 'is-invalid' : ''}`} id="height" onChange={props.onInputChange} required />
      <div className="invalid-feedback">
          Please, provide a numeric value for that field.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="width" className="form-label">Width (CM)</label>
      <input type="text" className={`form-control ${!props.inputIsValid.width && props.inputWasTouched.width ? 'is-invalid' : ''}`} id="width" onChange={props.onInputChange} required />
      <div className="invalid-feedback">
          Please, provide a numeric value for that field.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="length" className="form-label">Length (CM)</label>
      <input type="text" className={`form-control ${!props.inputIsValid.length && props.inputWasTouched.length ? 'is-invalid' : ''}`} id="length" onChange={props.onInputChange} aria-describedby="dimensions_help_text" required />
      <div className="invalid-feedback">
          Please, provide a numeric value for that field.
      </div>
    </div>
    <div id="dimensions_help_text" className="form-text">Please provide dimensions in centimeters. In case of large numbers keep in mind that 1m = 1000cm</div>
    </>
  );
};

export default Furniture;