import React from "react";
import "../form/form.css";

const Blob = () => {
  // https://stackoverflow.com/questions/23402542/embedding-svg-into-reactjs
  return (
    <div className="blob-class">
      <svg
        opacity={0.8}
        viewBox=" 0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="150%"
        id="blobSvg"
      >
        <path
          id="blob"
          d="M399,282Q416,314,388.5,332.5Q361,351,350.5,391Q340,431,303,428Q266,425,227.5,444Q189,463,152,446Q115,429,95,393.5Q75,358,73,321Q71,284,60,248Q49,212,53.5,171.5Q58,131,106.5,127.5Q155,124,174.5,89Q194,54,228,85Q262,116,291.5,111.5Q321,107,372.5,99Q424,91,445,128.5Q466,166,424,208Q382,250,399,282Z"
          fill="#F665C0"
        ></path>
      </svg>
    </div>
    // -------------------------------------------------------------
    // <svg
    //   viewBox="0 0 500 500"
    //   xmlns="http://www.w3.org/2000/svg"
    //   xmlnsXlink="http://www.w3.org/1999/xlink"
    //   width="100%"
    //   id="blobSvg"
    // >
    //   <path
    //     id="blob"
    //     d="M404,343.5Q358,437,242.5,450Q127,463,106.5,356.5Q86,250,128,180.5Q170,111,258,97.5Q346,84,398,167Q450,250,404,343.5Z"
    //     fill="#fd79a8"
    //   ></path>
    // </svg>
    // ----------------------------------------------------------------------
    // <div>
    //   <svg
    //     viewBox="0 0 500 500"
    //     xmlns="http://www.w3.org/2000/svg"
    //     xmlnsXlink="http://www.w3.org/1999/xlink"
    //     width="100%"
    //     id="blobSvg"
    //   >
    //     <defs>
    //       <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
    //         <stop
    //           offset="0%"
    //           style={{ stopColor: "rgb(238, 205, 163)" }}
    //         ></stop>
    //         <stop
    //           offset="100%"
    //           style={{ stopColor: "rgb(239, 98, 159)" }}
    //         ></stop>
    //       </linearGradient>
    //     </defs>
    //     <path
    //       id="blob"
    //       d="M399,282Q416,314,388.5,332.5Q361,351,350.5,391Q340,431,303,428Q266,425,227.5,444Q189,463,152,446Q115,429,95,393.5Q75,358,73,321Q71,284,60,248Q49,212,53.5,171.5Q58,131,106.5,127.5Q155,124,174.5,89Q194,54,228,85Q262,116,291.5,111.5Q321,107,372.5,99Q424,91,445,128.5Q466,166,424,208Q382,250,399,282Z"
    //       fill="url(#gradient)"
    //     ></path>
    //   </svg>
    // </div>
  );
};

export default Blob;
