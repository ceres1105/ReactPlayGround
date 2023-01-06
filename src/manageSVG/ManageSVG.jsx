// SVG 조작
// 목표: path 색상 변경, path 별로 clickEvent 추가
// svg 파일 직접 넣는 방법 선택.(path 별로 조작하기 제일 쉬움): style 다 지우고 class -> className으로 변경하고 사용
// ReactSVG 라이브러리 사용할 수도 있는 듯

import React from 'react';
import styled from 'styled-components';
import keybard from './keyboard.svg';

function ManageSVG() {
  const handleSpaceBar = () => {
    alert('hello');
  };
  return (
    <>
      <SVG type="image/svg+xml" data={keybard} className="keyboard">
        sdf
      </SVG>

      <SVG1 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="a" />
        <g id="b">
          <g id="c">
            <g>
              <g className="e">
                <rect className="g" width="48" height="48" />
              </g>
              <g className="f">
                <rect className="g" width="48" height="48" />
              </g>
              <path
                className="d"
                d="M43,13v22H5V13H43m.96-3H4.04c-1.13,0-2.04,.91-2.04,2.04v23.92c0,1.13,.91,2.04,2.04,2.04H43.96c1.13,0,2.04-.91,2.04-2.04V12.04c0-1.13-.91-2.04-2.04-2.04h0Z"
              />
              <polygon className="d" points="12 16 9 16 9 19 12 19 12 16 12 16" />
              <polygon className="d" points="17 16 14 16 14 19 17 19 17 16 17 16" />
              <polygon className="d" points="12 22 9 22 9 25 12 25 12 22 12 22" />
              <polygon className="d" points="17 22 14 22 14 25 17 25 17 22 17 22" />
              <polygon className="d" points="22 16 19 16 19 19 22 19 22 16 22 16" />
              <polygon className="d" points="27 16 24 16 24 19 27 19 27 16 27 16" />
              <polygon className="d" points="22 22 19 22 19 25 22 25 22 22 22 22" />
              <polygon className="d" points="27 22 24 22 24 25 27 25 27 22 27 22" />
              <polygon className="d" points="32 16 29 16 29 19 32 19 32 16 32 16" />
              <polygon className="d" points="39 16 34 16 34 19 39 19 39 16 39 16" />
              <polygon className="d" points="39 22 34 22 33 22 29 22 29 25 33 25 34 25 39 25 39 22 39 22" />
              <polygon onClick={handleSpaceBar} className="space" points="39 28 9 28 9 31 39 31 39 28 39 28" />
            </g>
          </g>
        </g>
      </SVG1>
    </>
  );
}

export default ManageSVG;

const SVG = styled.object`
  width: 400px;
`;
const SVG1 = styled.svg`
  width: 400px;
  & .d {
    fill: #fff;
  }
  & .e {
    opacity: 0.5;
  }
  & .f {
    opacity: 0.49;
  }
  & .g {
    fill: none;
  }
  & .space {
    cursor: pointer;
    fill: green;
    :hover {
      opacity: 0.5;
    }
  }
`;
