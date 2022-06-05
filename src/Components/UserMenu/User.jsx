import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom'
import Edit from '../../assets/Edit'
import UserTick from '../../assets/UserTick'
import { AuthContext } from '../../Context/Context'
import './User.css'
function User() {
    const history = useHistory()
    const {user} = useContext(AuthContext)

  return (
    <div className='parent'>
        
        <div className="div_1">

        
        <div className='Followers'>
            <div className="dp">
         <div className='dp_1'> 
             <div className="dp_style1">
                 <Edit/>
             </div>
         </div>
         </div>


         <div className="table_box_P"> 
         <div className="table_box">
            <div className="table_heading">
                <p>FRIENDS</p>
                </div>
                    <div className="folo_1">
                        <p>Followers</p>
                        <p className='zero'>0</p>
                    </div>
                    <div className="folo_1">
                        <p>Following</p>
                        <p className='zero'>0</p>
                    </div>
             </div>   
        </div>

        <div className="table_box_P2"> 
         <div className="table_box_2">
            <div className="table_heading_2">
                <p>Linked accounts</p>
            </div> 
                    <div className="folo_1">
                        <p>PHONE NUMBER</p>
                        <p><UserTick/></p>
                    </div>
                </div>

                <p className='MemberSince'>Member since May 2018</p>
               
            <p className='share_profile'>Share Profile Link</p>
        </div>
        </div>


        <div className="profile">

            <div className='profile_name_edit'>
                <div className='Name_profile'>
                    <p className='Name_user_2'>{user ? user.displayName : 'Login' }</p>
                    <div className="edit_b">
                    <div className='Edit_1'>
                    <p >Edit Profile</p>
                    </div>
                    </div>
                </div>
                <div className="border_bottum"></div>
            </div>

            <div className="ads_section">
                <div className="img_no_ads">
                    <img src="	https://statics.olx.in/external/base/img/no-publications.webp" alt="" />
                
                <p className='there_are_no_ads'>There are no Ads</p>
                <p className='no_adsPeragraph'>When users post ads, will appear here.
                    If you want to post something
                    you can do it now</p>
               </div> 
               <div className="selling_button" onClick={()=>{
                   history.push('/create')
               }}><p>Start selling</p></div>  
            </div>

        </div>


        </div>
        
    </div>
  )
}

export default User