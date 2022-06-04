import React, { useContext, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useHistory } from 'react-router-dom';
import Heart from '../../assets/Heart';
import { Context } from '../../Context/Context';
import { Filter_Context } from '../../Context/FilteredContext';
import Post, { PostContext } from '../../Context/PostContext';
import Banner from '../Banner/Banner';
import "./Filter.css"

function Filter() {

    const { filterProducts } = useContext(Filter_Context);
    const { firebase } = useContext(Context);
    const { setPostDetails } = useContext(PostContext);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const history = useHistory();
    const [products, setProducts] = useState([])

    useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(allPost)
        })
    }, []);

    var arr = []

    products.filter((product) => {
        if (params.search === null) {
            return null
        } else if (product.name.toLowerCase().includes(params.search.toLowerCase())) {
            return product
        } else if (product.category.toLowerCase().includes(params.search.toLowerCase())) {
            return product
        }
    }).map((product) => {
        arr = [...arr,product]
    })
  

    return (
        <div>
            <div className="banner">
                <Banner/>
            </div>

            <div className="products">
                <h3>{params.search.toUpperCase()}</h3>
                <h5>CATEGORY - <span> {filterProducts?.category}</span></h5>

                <hr />

                <div className="postParentDiv">
                    <div className="cards row mx-auto container">
                        {arr.map((post) => {
                            return (
                                <div
                                    className="card col-md-3"
                                    onClick={() => {
                                        setPostDetails(post)
                                        history.push('/view')
                                    }}
                                >
                                    <div className="favorite">
                                        <Heart></Heart>
                                    </div>
                                    <div className="image">
                                        <img src={post.url} alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="rate">
                                            <NumberFormat
                                                thousandSeparator={true}
                                                displayType={'text'}
                                                thousandsGroupStyle="lakh"
                                                prefix={'₹'}
                                                value={post.price}
                                            />
                                        </p>
                                        <p className="name"> {post.name}</p>
                                    </div>
                                    <div className="date mt-4">
                                        <span>{post.createdAt}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
    
}

export default Filter