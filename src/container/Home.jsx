// From Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Hook
import useHomeFetch from '../hooks/useHomeFetch'

// Components
import { HeroImage, Grid, Thumbn, Spinner, SearchBar, Button } from '../components'

// Image
import NoImage from '../images/no_image.jpg'


const Home = () => {
   const { state, loading, error, setSearchTerm, setIsLoadingMore } = useHomeFetch()

   if (error) return <div>Something went wrong...</div>

   return (
      <>
         {
            state.results[0] &&
            <HeroImage
               image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
               title={state.results[0].original_title}
               text={state.results[0].overview}
            />
         }

         <SearchBar setSearchTerm={setSearchTerm} />

         <Grid header="Popular Movies">
            {state.results.map(movie => (

               <Thumbn
                  key={movie.id}
                  clickable
                  image={
                     movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                  }
                  movieId={movie.id}
                  title={movie.original_title}
                  desc={movie.overview}
               />
            ))}
         </Grid>
         {loading && <Spinner />}
         {state.page < state.total_pages && !loading && (
            <Button text="Load More" callback={() => setIsLoadingMore(true)} />
         )}
      </>
   )
}

export default Home;