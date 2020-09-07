import React from "react";

function Error({ error, done }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossorigin="anonymous"
      ></link>
      {error && (
        <div className="alert alert-danger center" role="alert">
          Please complete all fields!
        </div>
      )}
      {done && (
        <div className="alert alert-success center" role="alert">
          Done{" "}
          <span role="img" aria-label="emogis">
            👌🏽🚀
          </span>
        </div>
      )}
    </div>
  );
}

export default Error;
