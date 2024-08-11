import React from "react";

export default function Meeting({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>hello</h1>
      <div>Meeting: {params.id}</div>
    </div>
  );
}
