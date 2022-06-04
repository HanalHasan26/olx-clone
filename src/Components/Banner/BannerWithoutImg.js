import React from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Arrow from '../../assets/Arrow'
function BannerWithoutImg() {
    const history = useHistory()

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>{
              history.push('/filter/?search=Car')
            }}>Cars</span>
            <span  onClick={()=>{
              history.push('/filter/?search=Motorcycle')
            }}>Motorcycles</span>
            <span onClick={()=>{
              history.push('/filter/?search=Mobile%20Phones')
            }}>Mobile Phones</span>
            <span onClick={()=>{
              history.push('/filter/?search=For%20Sale:%20Houses%20&%20Apartments')
            }} >For Sale: Houses & Apartments</span>
            <span onClick={()=>{
              history.push('/filter/?search=Scooters')
            }}>Scooters</span>
            <span onClick={()=>{
              history.push('/filter/?search=Commercial%20&%20Other%20Vehicles')
            }}>Commercial & Other Vehicles</span>
            <span onClick={()=>{
              history.push('/filter/?search=For%20Rent:%20Houses%20&%20Apartments')
            }}>For Rent: Houses & Apartments</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BannerWithoutImg