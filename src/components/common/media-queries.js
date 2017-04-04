/*
    example
    const Box = styled.div`
    font-size: 16px;
    ${ media.iphone6` font-size: 14px;` }
    `;
*/

import { css } from 'styled-components'

export const media = {
    iphone5: (...args) => css`
        @media (max-width: 320px) {
            ${css(...args)}
        }
    `,
    iphone6: (...args) => css`
        @media (max-width: 375px) {
            ${css(...args)}
        }
    `,
    iphoneplus: (...args) => css`
        @media (max-width: 414px) {
            ${css(...args)}
        }
    `,
    phablet: (...args) => css`
        @media (max-width: 640px) {
            ${css(...args)}
        }
    `,
    tinytab: (...args) => css`
        @media (max-width: 740px) {
            ${css(...args)}
        }
    `,
    tablet: (...args) => css`
        @media (max-width: 768px) {
            ${css(...args)}
        }
    `,
    landtab: (...args) => css`
        @media (max-width: 960px) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (max-width: 1024px) {
            ${css(...args)}
        }
    `,
    widedesk: (...args) => css`
        @media (max-width: 1140px) {
            ${css(...args)}
        }
    `,
    bigdesktop: (...args) => css`
        @media (max-width: 1199px) {
            ${css(...args)}
        }
    `,
    hdready: (...args) => css`
        @media (max-width: 1280px) {
            ${css(...args)}
        }
    `,
    megadesktop: (...args) => css`
        @media (max-width: 1440px) {
            ${css(...args)}
        }
    `,
}