import React,{useContext, useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, Context } from '../../Context/Context';
import {PostContext } from '../../Context/PostContext';
import Dropdown from '../../assets/DropDown';
import SearchIcon from '../../assets/SearchIcon';
import SearchBar from '../Search/Search';
import Location from '../../assets/Location';

function Header() {
  // const [select, setSelect] = useState('')
  const history = useHistory()
  const {firebase} = useContext(Context)
  const [products,setProducts] = useState([])
  const {user} = useContext(AuthContext)


  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot)=>{
       const allProducts = snapshot.docs.map((product)=>{
         return{
           ...product.data(),
           id:product.id
         }
       })
       setProducts(allProducts)
    })
   }, [products])



  const {setPostContent}=useContext(PostContext)
  
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");
console.log(products);
const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = products.filter((value) => {
    return value.name.toLowerCase().includes(searchWord.toLowerCase())||value.category.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
};

const clearInput = () => {
  setFilteredData([]);
  setWordEntered("");
};
const handleSelectedSearch=(item)=>{
     setPostContent(item)
     history.push("/view")
}
const handleSearchClick=()=>{
  if(filteredData.length===0){
   alert("No items found.., please search by product category or product name");
   }
   
   else {setProducts(filteredData);
   history.push("/viewmore")}
   
}

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>{
          history.push('/')
        }} className="brandName">
          <OlxLogo ></OlxLogo>
        </div>
        <div className='placeSearch1'>
          <Location/>
        </div>
        <div>
          <div className='productSearch'>
            <SearchBar/>
            </div>
            </div>
          <div class="dropdown">
          <div>
          <Dropdown/>
 
          </div> 
      </div>
        <div className="loginPage">
          <span onClick={()=>{
            {user ? history.push('/userMenu'):history.push('/login')}
          }}>{user ? user.displayName : 'Login' }</span>
          <hr />
        </div>
        <div>
        {user && <span onClick={()=>{
            firebase.auth().signOut()
              history.push('/login')
          }}>Logout</span>}
        </div>

       {user && <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
                history.push('/create')
            }}>SELL</span>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Header;
