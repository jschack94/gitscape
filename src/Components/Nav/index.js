import React from 'react';
import { Container } from '../../Styling/styles';
// import { Link } from 'react-router-dom';
import { NavContent, LogoCont, Menu, LinkCont } from './styles';
const Nav = props => {
    return (
        <Container>
            <NavContent>
                <LogoCont />
                <hr />
                <Menu>
                    <em>menu</em>
                    <a href=''>
                        <LinkCont className='active'>
                            <svg
                                width='24'
                                height='22'
                                viewBox='0 0 24 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M5.50926 20.0374H18.5602C19.5884 20.0374 20.4246 19.232 20.4246 18.2416V10.1606C20.4247 10.0427 20.4007 9.92587 20.3538 9.81693C20.3069 9.70799 20.2382 9.60904 20.1515 9.52577L12.6938 2.34261C12.6073 2.25915 12.5046 2.19295 12.3915 2.14777C12.2784 2.1026 12.1572 2.07935 12.0347 2.07935C11.9123 2.07935 11.7911 2.1026 11.678 2.14777C11.5649 2.19295 11.4621 2.25915 11.3757 2.34261L3.91797 9.52577C3.83128 9.60904 3.76252 9.70799 3.71565 9.81693C3.66878 9.92587 3.64471 10.0427 3.64484 10.1606V18.2416C3.64484 19.232 4.48103 20.0374 5.50926 20.0374V20.0374ZM10.1703 18.2416V13.7522H13.8991V18.2416H10.1703ZM5.50926 10.5323L12.0347 4.24705L18.5602 10.5323L18.5611 18.2416H15.7636V13.7522C15.7636 12.7618 14.9274 11.9564 13.8991 11.9564H10.1703C9.14208 11.9564 8.30589 12.7618 8.30589 13.7522V18.2416H5.50926V10.5323Z'
                                    fill='#70D140'
                                />
                            </svg>

                            <h3>Home</h3>
                        </LinkCont>
                    </a>
                    <a href=''>
                        <LinkCont>
                            <svg
                                width='23'
                                height='22'
                                viewBox='0 0 23 22'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M16.8667 19.7833C16.8667 20.1975 17.2024 20.5333 17.6167 20.5333H20.7167C21.1309 20.5333 21.4667 20.1975 21.4667 19.7833V16.8833C21.4667 16.4691 21.1309 16.1333 20.7167 16.1333H17.6167C17.2024 16.1333 16.8667 16.4691 16.8667 16.8833V19.7833ZM16.8667 13.1833C16.8667 13.5975 17.2024 13.9333 17.6167 13.9333H20.7167C21.1309 13.9333 21.4667 13.5975 21.4667 13.1833V10.2833C21.4667 9.86911 21.1309 9.53332 20.7167 9.53332H17.6167C17.2024 9.53332 16.8667 9.8691 16.8667 10.2833V13.1833ZM9.96665 6.58332C9.96665 6.99753 10.3024 7.33332 10.7167 7.33332H13.8167C14.2309 7.33332 14.5667 6.99753 14.5667 6.58332V3.68332C14.5667 3.26911 14.2309 2.93332 13.8167 2.93332H10.7167C10.3024 2.93332 9.96665 3.26911 9.96665 3.68332V6.58332ZM16.8667 6.58332C16.8667 6.99753 17.2024 7.33332 17.6167 7.33332H20.7167C21.1309 7.33332 21.4667 6.99753 21.4667 6.58332V3.68332C21.4667 3.26911 21.1309 2.93332 20.7167 2.93332H17.6167C17.2024 2.93332 16.8667 3.26911 16.8667 3.68332V6.58332ZM9.96665 13.1833C9.96665 13.5975 10.3024 13.9333 10.7167 13.9333H13.8167C14.2309 13.9333 14.5667 13.5975 14.5667 13.1833V10.2833C14.5667 9.86911 14.2309 9.53332 13.8167 9.53332H10.7167C10.3024 9.53332 9.96665 9.8691 9.96665 10.2833V13.1833ZM3.06665 13.1833C3.06665 13.5975 3.40244 13.9333 3.81665 13.9333H6.91665C7.33086 13.9333 7.66665 13.5975 7.66665 13.1833V10.2833C7.66665 9.86911 7.33086 9.53332 6.91665 9.53332H3.81665C3.40244 9.53332 3.06665 9.8691 3.06665 10.2833V13.1833ZM3.06665 19.7833C3.06665 20.1975 3.40244 20.5333 3.81665 20.5333H6.91665C7.33086 20.5333 7.66665 20.1975 7.66665 19.7833V16.8833C7.66665 16.4691 7.33086 16.1333 6.91665 16.1333H3.81665C3.40244 16.1333 3.06665 16.4691 3.06665 16.8833V19.7833ZM9.96665 19.7833C9.96665 20.1975 10.3024 20.5333 10.7167 20.5333H13.8167C14.2309 20.5333 14.5667 20.1975 14.5667 19.7833V16.8833C14.5667 16.4691 14.2309 16.1333 13.8167 16.1333H10.7167C10.3024 16.1333 9.96665 16.4691 9.96665 16.8833V19.7833ZM3.06665 6.58332C3.06665 6.99753 3.40244 7.33332 3.81665 7.33332H6.91665C7.33086 7.33332 7.66665 6.99753 7.66665 6.58332V3.68332C7.66665 3.26911 7.33086 2.93332 6.91665 2.93332H3.81665C3.40244 2.93332 3.06665 3.26911 3.06665 3.68332V6.58332Z'
                                    fill='#C0C0C0'
                                />
                            </svg>

                            <h3>Categories</h3>
                        </LinkCont>
                    </a>
                    <a href=''>
                        <LinkCont>
                            <svg
                                width='19'
                                height='12'
                                viewBox='0 0 19 12'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M13.8931 0.580566C13.5092 0.580566 13.3169 1.0448 13.5884 1.31631L14.6041 2.33199C14.7724 2.5003 14.7724 2.77319 14.6041 2.9415L10.8318 6.71372C10.6635 6.88203 10.3906 6.88203 10.2223 6.71372L7.24047 3.73186C7.07208 3.56346 6.79903 3.56355 6.63075 3.73206L0.586449 9.78452C0.418331 9.95286 0.418423 10.2256 0.586655 10.3938L1.24338 11.0506C1.41169 11.2189 1.68458 11.2189 1.85289 11.0506L6.63075 6.27269C6.79906 6.10438 7.07195 6.10438 7.24026 6.27269L10.2226 9.255C10.3908 9.42322 10.6635 9.42333 10.8318 9.25525L15.8791 4.21603C16.0474 4.04794 16.3201 4.04805 16.4883 4.21627L17.5043 5.23219C17.7758 5.5037 18.24 5.31141 18.24 4.92744V1.01156C18.24 0.773527 18.047 0.580566 17.809 0.580566H13.8931Z'
                                    fill='#C0C0C0'
                                />
                            </svg>

                            <h3>Trending</h3>
                        </LinkCont>
                    </a>
                </Menu>
            </NavContent>
        </Container>
    );
};

export default Nav;
