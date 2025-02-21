import React from "react";

const Link = ({ level, index, data, handleInputChange, removeLink }) => {
    return (
    <div className="border p-3 mb-3">
      <div className="row mb-2">
        <div className="col-md-6">
          <label htmlFor={`${level}-title-${index}`}>Title</label>
          <input
            type="text"
            id={`${level}-title-${index}`}
            className="form-control"
            value={data.title}
            onChange={(e) => handleInputChange(level, index, "title", e.target.value)}

            placeholder="Enter title"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor={`${level}-link-${index}`}>Link</label>
          <input
            type="url"
            id={`${level}-link-${index}`}
            className="form-control"
            value={data.link}
            onChange={(e) => handleInputChange(level, index, "link", e.target.value)}

            placeholder="Enter link"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <label htmlFor={`${level}-rating-${index}`}>Rating</label>
          <select
            id={`${level}-rating-${index}`}
            className="form-control"
            value={data.rating}
            onChange={(e) => handleInputChange(level, index, "rating", e.target.value)}

          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor={`${level}-description-${index}`}>Description</label>
          <textarea
            id={`${level}-description-${index}`}
            className="form-control"
            value={data.description}
            onChange={(e) => handleInputChange(level, index, "description", e.target.value)}

            placeholder="Enter description"
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => removeLink(level, index)}
      >
        Remove
      </button>
    </div>
  );
};

export default Link;
