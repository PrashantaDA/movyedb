import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Styles
import { Wrapper, Content } from './SearchBar.styles'

// Search Icon
import SearchIcon from '../../images/search-icon.svg'


const SearchBar = ({ setSearchTerm }) => {
   const [searchValue, setSearchValue] = useState('');
   const initial = useRef(true)

   useEffect(() => {
      if (initial.current) {
         initial.current = false
         return;
      }

      const timer = setTimeout(() => {
         setSearchTerm(searchValue)
      }, 500)

      return () => clearTimeout(timer)
   }, [setSearchTerm, searchValue])

   return (
      <>
         <Wrapper>
            <Content>
               <img src={SearchIcon} alt="search-icon" />
               <input
                  type="text"
                  placeholder='Search Movie'
                  onChange={e => setSearchValue(e.currentTarget.value)}
                  value={searchValue}
               />
            </Content>
         </Wrapper>
      </>
   )
};

SearchBar.propTypes = {
   setSearchTerm: PropTypes.func
}

export default SearchBar