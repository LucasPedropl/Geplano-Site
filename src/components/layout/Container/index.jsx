// Container Component
import React from 'react';
import { ContainerStyled } from './styles';

const Container = ({ children }) => (
	<ContainerStyled>{children}</ContainerStyled>
);

export default Container;
