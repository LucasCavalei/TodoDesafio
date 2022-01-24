import React from "react";

const Bg = () => {
  const bgStyle = {
    zIndex: 1,
    float: "left",
    position: "absolute",
    top: "-250px",
    right: "-25px",
  };
  return (
    <div className="bg" style={bgStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1037.052"
        height="882.743"
        viewBox="0 0 1037.052 882.743"
      >
        <defs>
          <style>
            {/* .cls-1 {
        stroke: #707070;
        fill: url(#linear-gradient);
      } */}
          </style>
          <g stroke="#707070" fill="url(#linear-gradient)">
            <linearGradient
              id="linear-gradient"
              x1="0.5"
              x2="0.5"
              y2="0.985"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#f02eaa" />
              <stop offset="0.1" stop-color="#ff00a3" />
              <stop offset="0.309" stop-color="#ff00a3" />
              <stop offset="0.464" stop-color="#f02eaa" />
              <stop offset="0.695" stop-color="#ef56b8" />
              <stop offset="0.729" stop-color="#ef52b6" />
              <stop offset="0.768" stop-color="#ef4db4" />
              <stop offset="1" stop-color="#ec6abd" />
            </linearGradient>
          </g>
        </defs>
        <path
          id="Caminho_1"
          data-name="Caminho 1"
          class="cls-1"
          stroke="#707070"
          fill="url(#linear-gradient)"
          d="M622.051-76.641S729.258,281.5,938.375,289.868s79.664,175.8,79.664,175.8-67.714,62.787,0,159.06,87.63,156.967,171.277,161.153,101.571,0,101.571,0l21.9-7.667,19.735-9.611s51.768-57.8,55.113-107.948c.318-4.765-.428-10.236-1.153-15-.518-3.4.439,2.825,0-.48-3.829.7,13.344-25.126-23.9-62.307-39.832-39.765-15.933-117.2-15.933-117.2S1382.5,300.332,1454.2,304.518s131.445,2.093,171.277,69.066,0-450.225,0-450.225"
          transform="matrix(1, 0.017, -0.017, 1, -607.72, 65.925)"
        />
      </svg>
    </div>
  );
};
export default Bg;
