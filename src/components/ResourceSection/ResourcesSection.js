import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectListofResources } from "../../store/selectors";

// resource.name , resource.type, resource.url, resource.tags
export default function ResourceSection() {
  const resources = useSelector(selectListofResources);
  console.log("resource", resources);
  return (
    <div className="ResourcesSection">
      <h2>All resources</h2>
      <div className="resources">
        <p>
          {resources.map((resource, index) => {
            return (
              <div className="resource" key={resource.id}>
                <div className="title">
                  <strong>{resource.name}</strong> (<em>{resource.type}</em>)
                  &mdash; Find out more at{" "}
                  <a href={resource.url}>{resource.url}</a>
                </div>

                <div className="meta">
                  {resource.tags.map((tag, i) => {
                    return (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
}
