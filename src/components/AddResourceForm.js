import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../store/actions";

export default function AddResourceForm() {
  const initialState = "";
  const [name, set_Name] = useState("");
  const [type, set_Type] = useState("");
  const [tags, set_Tags] = useState("");
  const [url, set_Url] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    console.log("What is this?", name, type, tags);

    dispatch(addResource(name, type, tags.split(/[, ]+/), url));

    set_Name(initialState);
    set_Type(initialState);
    set_Tags(initialState);
    set_Url(initialState);

    // - clear the input fields
  };

  return (
    <form onSubmit={submit}>
      <h3>Add new resource</h3>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => set_Name(e.target.value)}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Type:{" "}
          <select value={type} onChange={(e) => set_Type(e.target.value)}>
            <option value="library">library</option>
            <option value="website">website</option>
            <option value="resource">resource</option>
            <option value="tool">tool</option>
            <option value="cheatsheet">cheatsheet</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Tags (comma and/or space-separated):{" "}
          <input
            type="text"
            value={tags}
            onChange={(e) => set_Tags(e.target.value)}
          ></input>
        </label>
      </p>
      <p>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => set_Url(e.target.value)}
          ></input>
        </label>
      </p>
      <p>
        <button type="submit">Add this resource!</button>
      </p>
    </form>
  );
}
