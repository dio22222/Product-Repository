const Book = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="weight" className="form-label">Weight (KG)</label>
      <input type="text" className={`form-control ${!props.inputIsValid.weight && props.inputWasTouched.weight ? 'is-invalid' : ''}`} id="weight" onChange={props.onInputChange} aria-describedby="weight_help_text" required/>
      <div className="invalid-feedback">
          Please, provide a numeric value for that field.
      </div>
      <div id="weight_help_text" className="form-text">Please provide the Size in KG. In case of a book lighter than 1KG, you can provide it's weight in grams with the dot separator. ex. of 135 grams: 0.135 </div>
    </div>
  );
};

export default Book;