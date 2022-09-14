import React from 'react'

export type TOpts = {
  cx: number;
  cy: number;
  radius: number;
  start_angle: number;
  end_angle: number;
  thickness: number;
  color: string;
}

const Arc = (opts: TOpts,) => {

  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  /*
  https://codepen.io/massimo-cassandro/pen/rWpEEV
  opts = {
    cx              <-- center x
    cy              <-- center y
    radius          <-- circle radius
    start_angle     <-- start angle in degrees
    end_angle       <-- end angle in degrees
  };
  */

  const start = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.end_angle);
  const end = polarToCartesian(opts.cx, opts.cy, opts.radius, opts.start_angle);
  const largeArcFlag = opts.end_angle - opts.start_angle <= 180 ? "0" : "1";

  const cutout_radius = opts.radius - opts.thickness,
    start2 = polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.end_angle),
    end2 = polarToCartesian(opts.cx, opts.cy, cutout_radius, opts.start_angle),



    d = [
      "M", start.x, start.y,
      "A", opts.radius, opts.radius, 0, largeArcFlag, 0, end.x, end.y,
      "L", opts.cx, opts.cy,
      "Z",

      "M", start2.x, start2.y,
      "A", cutout_radius, cutout_radius, 0, largeArcFlag, 0, end2.x, end2.y,
      "L", opts.cx, opts.cy,
      "Z"
    ].join(" ");

  return (
    <path id="arc" fill={opts.color} stroke="none" fillRule="evenodd" d={d} />
  )
}

export default Arc