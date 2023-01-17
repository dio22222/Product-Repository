const Book = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="weight" className="form-label">Weight (KG)</label>
      <input type="text" className="form-control" id="weight" onChange={props.onFormValueChange} aria-describedby="weight_help_text"/>
      <div id="weight_help_text" className="form-text">Please provide the Size in KG. In case of a book lighter than 1KG, you can provide it's weight in grams with the dot separator. ex. of 135 grams: 0.135 </div>
    </div>
  );
};

export default Book;