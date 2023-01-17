const DVD = (props) => {
  return (
      <div className="mb-3">
        <label htmlFor="size" className="form-label">Size (MB)</label>
        <input type="text" className={`form-control ${!props.inputIsValid.size && props.inputWasTouched.size ? 'is-invalid' : ''}`} id="size" onChange={props.onInputChange} aria-describedby="size_help_text" required/>
        <div className="invalid-feedback">
            Please, provide a numeric value for that field.
        </div>
        <div id="size_help_text" className="form-text">Please provide the Size in MB. In case of a large sizes keep in mind that 1GB = ~1000MB</div>
      </div>
  );
};

export default DVD;