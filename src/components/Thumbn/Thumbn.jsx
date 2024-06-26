import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// Styles
import { Image, HeadText, Container } from './Thumbn.styles'

const Thumbn = ({ image, movieId, clickable, title, desc }) => (
   <Container>
      {clickable ? (
         <Link to={`/${movieId}`}>
            <Image src={image} alt="movie-thumbnail" />
            <HeadText>{title}</HeadText>
            <p>{desc}</p>
         </Link>
      ) : (
         <>
            <Image src={image} alt="movie-thumbnail" />
            <HeadText>{title}</HeadText>
            <p>{desc}</p>
         </>
      )
      }

   </Container>
);

Thumbn.propTypes = {
   image: PropTypes.string,
   movieId: PropTypes.number,
   clickable: PropTypes.bool,
   title: PropTypes.string,
   desc: PropTypes.string
}

export default Thumbn