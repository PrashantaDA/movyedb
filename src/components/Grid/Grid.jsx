import PropTypes from 'prop-types'

// Styles
import { Wrapper, Content } from "./Grid.styles"

const Grid = ({ header, children }) => (
   <Wrapper>
      <h1>{header}</h1>
      <Content>
         {children}
      </Content>
   </Wrapper>
);


Grid.propTypes = {
   header: PropTypes.string,
   children: PropTypes.array
}

export default Grid