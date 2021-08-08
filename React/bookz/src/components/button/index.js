import React from "react";

function Button(props) {
  return (
    <button type="button" class="btn btn-primary">
      {props.label}
    </button>
  );
}

export default Button;
