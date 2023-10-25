import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Home = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <div>
      <h2> Estamos en home  </h2>
      {countries.map(({name}) => ( 
         <h2>Name: {name}</h2>
      ))}
      <h1></h1>
    </div>
  );
};
export default Home;