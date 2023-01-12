const DVD = () => {
  return (
      <div className="mb-3">
        <label htmlFor="size" className="form-label">Size (MB)</label>
        <input type="number" className="form-control" id="size" step={1} aria-describedby="size_help_text"/>
        <div id="size_help_text" className="form-text">Please provide the Size in MB. In case of a large sizes keep in mind that 1GB = ~1000MB</div>
      </div>
  );
};

export default DVD;