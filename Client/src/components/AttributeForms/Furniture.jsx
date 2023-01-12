const Furniture = (props) => {
  return (
    <>
    <div className="mb-3">
      <label htmlFor="height" className="form-label">Height (CM)</label>
      <input type="number" className="form-control" id="height" step={1} onChange={props.onFormValueChange}/>
    </div>
    <div className="mb-3">
      <label htmlFor="width" className="form-label">Width (CM)</label>
      <input type="number" className="form-control" id="width" step={1}/>
    </div>
    <div className="mb-3">
      <label htmlFor="length" className="form-label">Length (CM)</label>
      <input type="number" className="form-control" id="length" step={1} aria-describedby="dimensions_help_text"/>
    </div>
    <div id="dimensions_help_text" className="form-text">Please provide dimensions in centimeters. In case of large numbers keep in mind that 1m = 1000cm</div>
    </>
  );
};

export default Furniture;