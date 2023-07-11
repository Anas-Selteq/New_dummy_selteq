const SubmitComment = () => {
  return (
    <>
      <h4 className="img_text mt-5">Submit a Comment</h4>
      <h6 className="img_h6_blogn">
        Your email address will not be published. Required fields are marked *
      </h6>
      <textarea
        className="form-control mt-3"
        rows={5}
        placeholder="Comment *"
        type="text"
      ></textarea>
      <input className="form-control mt-3" type="text" placeholder="Name *" />
      <input className="form-control mt-3" type="email" placeholder="Email *" />
      <input className="form-control mt-3" type="text" placeholder="Website" />
      <div className="row mt-4">
        <div className="col-md-8 m-auto">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="defaultCheck1"
            />
            <label
              className="form-check-label img_h6_blogn"
              htmlFor="defaultCheck1"
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>
        <div className="col-md-4 text-right">
          <button className="btn btn-outline-primary btn-lg">
            {" "}
            Submit Comment{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SubmitComment;
