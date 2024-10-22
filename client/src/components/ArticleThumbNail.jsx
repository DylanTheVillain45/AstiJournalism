import React from 'react'
import { Link } from 'react-router-dom'

function ArticleThumbNail({id, title, author, img}) {
  return (
    <Link to={`/article/${id}`}>
      <div className='px-4 py-4 border-red border-2 bg-slate-50 hover:drop-shadow-2xl transition-all duration-300'>
        <img src={img} alt="" className='h-64 mx-auto w-72 object-cover' />
        <h2 className='text-center capitalize text-2xl font-semibold tracking-wide mt-4 underline mb-2'>{title}</h2>
        <h3 className='text-slate-600 text-md text-center'>{author}</h3>
      </div>
    </Link>
  )
}

export default ArticleThumbNail