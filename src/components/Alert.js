import React from "react";

export default function Alert({ alert = {} }) {
  return (
    <div
      className="alert"
      style={{ background: alert.bg, borderLeft: `2px solid ${alert.color}` }}
    >
      <h5 style={{ color: alert.color }}>{alert.message}</h5>
    </div>
  );
}
