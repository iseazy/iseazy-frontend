import styled from 'styled-components/macro';

const LogoContainerStyled = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    position: relative;
    padding: 20px;
    background: #E7E8E8;
    box-shadow: 0px 3px 6px #00000033;
    margin: 0 auto;
`


const Logo = () => {
    return (
        <LogoContainerStyled>
            <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 70 85">
                <g transform="translate(-26 -14)">
                    <path d="M58.5,20.25c-14.475,0-26.25,11.439-26.25,25.5a25.1,25.1,0,0,0,9.838,19.894A7.032,7.032,0,0,1,44.85,71.22v4.45a3.8,3.8,0,0,0,3.85,3.74H68.3a3.8,3.8,0,0,0,3.85-3.74V71.22a7.034,7.034,0,0,1,2.762-5.576A25.1,25.1,0,0,0,84.75,45.75C84.75,31.689,72.975,20.25,58.5,20.25ZM46.366,54.212a3.214,3.214,0,0,1-.466.038,3.061,3.061,0,1,1,0-6.12V46.09a5.3,5.3,0,0,0-3.445,1.282,3.039,3.039,0,0,1-2.5-2.982,3.087,3.087,0,0,1,2.988-3.056.629.629,0,0,1,.088,0,3.154,3.154,0,0,1,2.4,1l1.572-1.352a5.249,5.249,0,0,0-3.676-1.669,2.969,2.969,0,0,1-.567-1.722,3.111,3.111,0,0,1,3.15-3.06,3.25,3.25,0,0,1,.468.038A5.223,5.223,0,0,0,51.5,38.61V36.57a3.061,3.061,0,1,1,3.15-3.06v8.928a3.881,3.881,0,0,0-1.75-.428,3.8,3.8,0,0,0-3.85,3.74h2.1a1.751,1.751,0,0,1,3.5,0v9.52a3.151,3.151,0,1,1-3.15-3.06V50.17A5.225,5.225,0,0,0,46.366,54.212ZM56.75,55.27v-.34h3.5v.34a5.06,5.06,0,0,0,2.572,4.363L60.536,66.49H56.464l-2.275-6.864A5.059,5.059,0,0,0,56.75,55.27ZM64.1,42.01a3.881,3.881,0,0,0-1.75.428V33.51a3.151,3.151,0,1,1,3.15,3.06v2.04a5.223,5.223,0,0,0,5.132-4.042,3.25,3.25,0,0,1,.468-.038,3.111,3.111,0,0,1,3.15,3.06,2.969,2.969,0,0,1-.567,1.722,5.249,5.249,0,0,0-3.676,1.669l1.572,1.352a3.14,3.14,0,0,1,2.321-1,1.932,1.932,0,0,1,.234.011,3.041,3.041,0,0,1,.412,6.032A5.3,5.3,0,0,0,71.1,46.09v2.04a3.061,3.061,0,1,1,0,6.12,3.214,3.214,0,0,1-.466-.038A5.225,5.225,0,0,0,65.5,50.17v2.04a3.061,3.061,0,1,1-3.15,3.06V45.75a1.751,1.751,0,0,1,3.5,0h2.1A3.8,3.8,0,0,0,64.1,42.01ZM55.7,68.53h5.6a1.726,1.726,0,0,1,1.75,1.7v7.14h-9.1V70.23A1.726,1.726,0,0,1,55.7,68.53Zm17.9-4.48a9.048,9.048,0,0,0-3.549,7.17v4.45a1.726,1.726,0,0,1-1.75,1.7H65.15V70.23a3.743,3.743,0,0,0-2.491-3.487L64.807,60.3a5.311,5.311,0,0,0,.693.068,5.219,5.219,0,0,0,5.148-4.118c.151.012.3.038.452.038a5.184,5.184,0,0,0,5.25-5.1,4.918,4.918,0,0,0-.477-2.1,5.019,5.019,0,0,0-.006-9.417,4.924,4.924,0,0,0,.483-2.086,5.184,5.184,0,0,0-5.25-5.1c-.155,0-.3.026-.452.038a5.263,5.263,0,0,0-10.4.982V52.89h-3.5V33.51a5.263,5.263,0,0,0-10.4-.982c-.151-.012-.3-.038-.452-.038a5.184,5.184,0,0,0-5.25,5.1,4.928,4.928,0,0,0,.487,2.093,5.013,5.013,0,0,0-.01,9.41,4.918,4.918,0,0,0-.477,2.1,5.184,5.184,0,0,0,5.25,5.1c.155,0,.3-.026.452-.038A5.1,5.1,0,0,0,52.207,60.3l2.135,6.441A3.744,3.744,0,0,0,51.85,70.23v7.14H48.7a1.726,1.726,0,0,1-1.75-1.7V71.22A9.044,9.044,0,0,0,43.4,64.05a23.079,23.079,0,0,1-9.051-18.3c0-12.936,10.833-23.46,24.15-23.46S82.65,32.814,82.65,45.75A23.079,23.079,0,0,1,73.6,64.05Z" transform="translate(2.5 2.25)" /><rect width="22.4" height="2.04" transform="translate(49.8 83.36)" /><rect width="22.4" height="2.04" transform="translate(49.8 87.44)" /><path d="M63.9,71.25H44.3a1.048,1.048,0,0,0-1,.713,1,1,0,0,0,.4,1.142l6.489,4.427a6.993,6.993,0,0,0,7.829,0L64.5,73.105a1,1,0,0,0,.4-1.142A1.048,1.048,0,0,0,63.9,71.25Zm-7.091,4.612a4.928,4.928,0,0,1-5.418,0L47.622,73.29H60.578Z" transform="translate(6.9 20.27)" /><rect width="2.1" height="5.44" transform="translate(59.95 14)" /><path d="M0,0,5.481.069l.026,2.085L.026,2.085Z" transform="translate(74.79 22.756) rotate(-59.996)" /><path d="M0,0,2.085.026l.069,5.481L.069,5.481Z" transform="translate(42.591 19.064) rotate(-29.994)" /><path d="M0,0,5.562.069l.026,2.055L.026,2.055Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 85.936, 32.091)" /><path d="M0,0,2.055.026l.069,5.562L.069,5.562Z" transform="matrix(0.5, -0.866, 0.866, 0.5, 30.163, 31.136)" /><rect width="5.6" height="2.04" transform="translate(90.4 45.499)" /><rect width="5.6" height="2.04" transform="translate(26 45.499)" /><path d="M0,0,2.055.026l.069,5.562L.069,5.562Z" transform="matrix(0.5, -0.866, 0.866, 0.5, 85.936, 60.971)" /><path d="M0,0,5.562.069l.026,2.055L.026,2.055Z" transform="translate(30.162 61.925) rotate(-30.004)" />
                </g>
            </svg>
        </LogoContainerStyled>
    )
}

export default Logo;
