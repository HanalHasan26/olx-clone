import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'
import { Context } from '../../Context/Context'
import { Filter_Context } from '../../Context/FilteredContext'

import './Search.css'

function SearchBar() {

    const history = useHistory();
    const { firebase } = useContext(Context)
    const { setFilterProducts } = useContext(Filter_Context);
    const [state, setstate] = useState('')
    const [products, setProducts] = useState([])

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
     }, [])

    var obj1 = [...new Map(products.map(item => [JSON.stringify(item.name), item])).values()];
    var obj2 = [...new Map(products.map(item => [JSON.stringify(item.category), item])).values()];

    return (
        <form action={`/filter/`} method="get">
            <div className="productSearch">
                <div className="input">
                    <input
                        autocomplete="off"
                        id="search"
                        name="search"
                        type="text"
                        placeholder="Find car,mobile phone and more..."
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                    />
                </div>
                <div className="searchAction">
                    <div type="submit" ><SearchIcon color="#ffffff"></SearchIcon></div>
                </div>
                <div className="">
                    <div className="productsLists">
                        {obj1.filter((post) => {
                            if (state == "") {
                                return null
                            }
                            else if (post.name.toLowerCase().includes(state.toLowerCase())) {
                                return post
                            }
                        }).map((post, key) => {
                            return (
                                <div
                                    className="list"
                                    onClick={(e) => {
                                        setFilterProducts(post.name)
                                        history.push(`/filter/?search=${post.name}`)
                                        window.location.reload(false);
                                    }}
                                >
                                    <p>{post.name}</p>
                                </div>
                            )

                        })}

                        {obj2.filter((post) => {
                            if (state == "") {
                                return null
                            }
                            else if (post.category.toLowerCase().includes(state.toLowerCase())) {
                                return post
                            }
                        }).map((post, key) => {
                            return (
                                <div
                                    className="list"
                                    onClick={() => {
                                        setFilterProducts(post.category)
                                        history.push(`/filter/?search=${post.category}`)
                                        window.location.reload(false);
                                    }}
                                >
                                    <p>{post.category} - category</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchBar