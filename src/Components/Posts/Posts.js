import React from 'react';
import { useState,useEffect,useContext } from 'react';
import Heart from '../../assets/Heart';
import { Context } from '../../Context/Context';
import { PostContext } from '../../Context/PostContext';
import './Post.css';
import { useHistory } from 'react-router-dom';
import LoadingBars from '../Loading/LoadingBars';


function Posts() {
  
const {firebase} = useContext(Context)  
const [products,setProducts] = useState([])
const {setPostDetails} = useContext(PostContext)
const [loading, setLoading] = useState(false);
const history = useHistory()
useEffect(() => {
  setLoading(true)
 firebase.firestore().collection('products').get().then((snapshot)=>{
    const allProducts = snapshot.docs.map((product)=>{
      return{
        ...product.data(),
        id:product.id
      }
    })
    setProducts(allProducts)
    setLoading(false)
 })
}, [])

console.log(products);



  return (
    
    <div className="postParentDiv">
      {products && (
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div   
        className="cards">
          {loading ? <LoadingBars /> : ''}
          { products.map(product=>{
            return <div
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            }} className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
            })
            }

        </div>
      </div>
      )
          }
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
         <div   
        className="cards">
          {loading ? <LoadingBars /> : ''}
          { products.map(product=>{
            return <div
            onClick={()=>{
              setPostDetails(product)
              history.push('/view')
            }} className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
            })
            }

        </div>
      </div>  
    </div>
  );
}

export default Posts;
