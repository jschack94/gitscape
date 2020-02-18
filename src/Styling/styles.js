import styled from 'styled-components';

export const QUERIES = {
    medium: `min-width: 1092px`,
    small: `min-width: 552px`,
    maxWidth: `1500px`
};

export const COLORS = {
    pink: '#F86E6E',
    lightGreen: '#EDFFE4',
    green: '#70D140',
    lightBlue: '#E8F3FF',
    blue: '#1581FF',
    lightOrange: '#FFE9C8',
    orange: '#FFA115',
    lightYellow: '#FEEEAF',
    yellow: '#FDC500'
};

export const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: ${({ theme }) => theme.main};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
