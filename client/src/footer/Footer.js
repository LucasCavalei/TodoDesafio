import React from "react";

import Facebook from "../assets/icons/Facebook";
import Instagram from "../assets/icons/Instagram";
import Twitter from "../assets/icons/Twitter";
import Youtube from "../assets/icons/Youtube";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer" style={footerStyle}>
      <div className="Footer-description">
        <h2> Quem somos</h2>
        <h2>contato</h2>
        <h2>whatever</h2>
      </div>
      <div className="Footer-socialMedia" style={socialMediaStyle}>
        <Instagram />
        <Youtube />
        <Twitter />
        <Facebook />
        <div className="copyRight" style={{ marginLeft: "50px" }}>
          <h4>Copyright © 2022 LucasCavaleiro. Todos os direitos reservados</h4>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="1466.862"
        height="523.046"
        viewBox="0 0 2056.862 723.046"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#ec7ac3" />
            <stop offset="0.259" stop-color="#f936b3" />
            <stop offset="0.474" stop-color="#8f1161" />
            <stop offset="0.682" stop-color="#772457" />
            <stop offset="0.689" stop-color="#722655" />
            <stop offset="0.846" stop-color="#581b40" />
            <stop offset="1" stop-color="#3e102b" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#f02eaa" />
            <stop offset="0.259" stop-color="#f02eaa" />
            <stop offset="0.501" stop-color="#aa297b" />
            <stop offset="0.682" stop-color="#772457" />
            <stop offset="0.689" stop-color="#722655" />
            <stop offset="0.846" stop-color="#581b40" />
            <stop offset="1" stop-color="#3e102b" />
          </linearGradient>
        </defs>
        <g
          id="Grupo_5"
          data-name="Grupo 5"
          transform="translate(0.286 -357.341)"
        >
          <g id="Grupo_4" data-name="Grupo 4">
            <g id="Grupo_3" data-name="Grupo 3">
              <g id="Grupo_2" data-name="Grupo 2">
                <g
                  id="Componente_3_1"
                  data-name="Componente 3 – 1"
                  transform="translate(0.263 358.055)"
                >
                  <g id="Componente_2_1" data-name="Componente 2 – 1">
                    <g
                      id="Grupo_1"
                      data-name="Grupo 1"
                      transform="translate(40.737 -435.055)"
                    >
                      <g
                        id="Componente_1_1"
                        data-name="Componente 1 – 1"
                        transform="translate(-40.737 435.055)"
                      >
                        <path
                          id="Caminho_5"
                          data-name="Caminho 5"
                          d="M746,1466.564s119.418-65.249,272.263-111.328,174.008-51.609,277.472-46.079,225.74,29.491,348.016,70.041,216.335,49.766,263.364,47.923,105.815-18.432,105.815-18.432-4.7,1.843,108.167-53.453,18.811-18.432,159.9-62.668,378.585,29.491,378.585,29.491h11.759s.179,437.12,0,437.12H746Z"
                          transform="matrix(0.995, 0.105, -0.105, 0.995, -558.029, -1349.408)"
                          stroke="#707070"
                          stroke-width="1"
                          fill="url(#linear-gradient)"
                        />
                        <path
                          id="Caminho_6"
                          data-name="Caminho 6"
                          d="M746.635,1485.2c2.835-1.307,134.583-81.678,294.479-135.517s134.363-57.621,286.641-46.951,229.535,46.054,357.452,93.433,226.315,58.147,275.514,55.993,110.7-21.536,110.7-21.536-4.919,2.154,113.158-62.454,19.679-21.536,167.276-73.222,396.051,34.457,396.051,34.457h12.3s.188,510.734,0,510.734H746.04S743.8,1486.509,746.635,1485.2Z"
                          transform="translate(-704.463 -1118.307)"
                          stroke="#707070"
                          stroke-width="1"
                          fill="url(#linear-gradient-2)"
                        />
                      </g>
                    </g>
                  </g>
                  <path
                    id="Caminho_7"
                    data-name="Caminho 7"
                    d="M-87,886.915l1924.485,19.1v555.914H-87"
                    transform="translate(107.737 -755.055)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
const footerStyle = {
  zIndex: -1,
  float: "left",
  top: "200",
  position: "absolute",
};

const socialMediaStyle = {
  width: "40%",
  height: "250px",
  margin: "0 auto",
  display: "flex",
  top: "530px",
  position: "relative",
};
export default Footer;
