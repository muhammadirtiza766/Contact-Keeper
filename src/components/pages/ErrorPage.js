import React from 'react';

export default function ErrorPage() {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="display-4">
          Error<span className="text-danger"> (404) </span>Page Not For
        </h1>
      </div>
      <div className="card-body">
        <p className="text-secondry">
          <span className="text-danger">404 Page not found</span>
          <p className="text-secondry">Sorry User's the give path does not exist</p>
        </p>
      </div>
    </div>
  );
}
