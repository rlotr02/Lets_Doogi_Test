import React, { useEffect } from 'react';
import styled from 'styled-components';

const KakaoAdfit3 = () => {
  useEffect(() => {
    let ins = document.createElement('ins');
    let scr = document.createElement('script');
    ins.className = 'kakao_ad_area';
    ins.style = 'display:none;';
    scr.async = 'true';
    scr.type = 'text/javascript';
    scr.src = '//t1.daumcdn.net/kas/static/ba.min.js';
    ins.setAttribute('data-ad-unit', 'DAN-sgg6uoyMroeqR0lx');
    ins.setAttribute('data-ad-width', '320');
    ins.setAttribute('data-ad-height', '100');
    document.querySelector('.adfit4').appendChild(ins);
    document.querySelector('.adfit4').appendChild(scr);
  }, []);
  return <Advert3 className="adfit4" />;
};

export default KakaoAdfit3;

const Advert3 = styled.div``;
