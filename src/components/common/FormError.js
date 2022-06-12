import PropTypes from "prop-types";
import styled from "styled-components";

export default function ValidationError({ children }) {
  return <StyledDiv className="form-error">{children}</StyledDiv>;
}

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};

const StyledDiv = styled.div`
  background: #fbb;
  color: darkred;
  padding: 0.5rem 1rem;
`;
