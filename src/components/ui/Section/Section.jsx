import PropTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.styled';

export const Section=({title, children})=>(
    <Box as='section' p={4}>
    <Title>{title}</Title>
    {children}
    </Box>
    
)

Section.propTypes={
    title:PropTypes.string.isRequired,
};