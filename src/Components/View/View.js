import React,{useState,useContext,useEffect} from 'react';
import { Context } from '../../Context/Context';
import { PostContext } from '../../Context/PostContext';

import './View.css';
function View() {
const [userDetails, setUserDetails] = useState()
const {PostDetails} = useContext(PostContext)
const {firebase} = useContext(Context)

useEffect(() => {
  const {userId}= PostDetails
firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
  res.forEach(doc => {
    console.log(doc.data());
      setUserDetails(doc.data())
  });
})

},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {PostDetails.price} </p>
          <span>{PostDetails.name}</span>
          <p>{PostDetails.category}</p>
          <span>{PostDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <p>Seller Deatails</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
