import SearchBar from "../SearchBar/SearchBar" 
import CardDog from "../CardDog/CardDog"  
import Paginate from "../Paginate/Paginate" 
import style from "./Home.module.css"
const Home = () => {
    return (
       <div> 
        <SearchBar/>   
        <Paginate/>
        <CardDog/>

       </div>
    )
}

export default Home