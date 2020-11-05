import React,{useEffect,useState} from 'react'
import './App.css'
import Recipe from './Recipe'
//import Inline from './Inline'
// import './Appstyles.css'
// import styles from './Appstyles.Module.css'
// import Form from './Form'
// import Lifecycle1 from './Lifecycle1'
// import Fragments from './Fragments'
// import Table from './Table'
// import Purecomponent from './Purecomponent'
// import Parentcom from './Parentcom'
// import Memo from './Memo'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <h1>hello</h1>
//         {/* <h1 className='error'>ERROR</h1>
//         <h1 className={styles.success}>SUCCESS</h1> */}
//         {/* <Form /> */}
//         {/* <Lifecycle1 /> */}
//         {/* <Fragments /> */}
//         {/* <Table /> */}
//         {/* <Purecomponent /> */}
//         {/* <Parentcom /> */}
//         {/* <Memo name={this.state.name}/> */}
//       </div>
//     )
//   }
//}





const App=()=>{
  const APP_ID="#####";
  const APP_KEY="#####";
  const [recipes,setRecipes]=useState([]);
   const [search,setSearch]=useState("");
const[counter,setCounter]=useState(0);
const [query,setQuery]=useState('noodles')
useEffect(()=>{
getRecipes();

},[query]);

const getRecipes=async() =>
{
  const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

}
const updateSearch=e=>{
setSearch(e.target.value);
};
const getSearch= e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
};
  return(
  <div className="App">
    <form onSubmit={getSearch} className="search-form">
      <input className="serach-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">SEARCH</button>
 </form>
 <div className="recipes">
{recipes.map(recipe=>(
<Recipe 
key={recipe.recipe.label}
title={recipe.recipe.label} 
calories={recipe.recipe.calories}
image={recipe.recipe.image}
ingredients={recipe.recipe.ingredients}/>
))}
 </div>
 </div>
  );
};
export default App


 
