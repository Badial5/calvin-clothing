import React from 'react'
import DirectoryItem from '../directory-item/directory-items.component'
import {DirectoryContainer} from './directory.styles.jsx'

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://images.unsplash.com/photo-1531399395381-6603d3b9899f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80",
    //imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: 'shop/hats'
  },
  {
    id: 2,
    title: "jackets",
    //imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    //imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    //imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    route: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: 'shop/sneakers'
  },
  {
    id: 4,
    title: "womens",
    //imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    //imageUrl: "https://images.unsplash.com/photo-1618333452884-5c8d211ed2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    imageUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    route: 'shop/womens'
  },
  {
    id: 5,
    title: "mens",
    //imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    route: 'shop/mens'
  }
]



const Directory = () => {

  

  return (
    <DirectoryContainer >

    {categories.map((category) => (
     
     <DirectoryItem key={category.id}  
     category={category}  />
    ) )}

  </DirectoryContainer>
  )
}

export default Directory
