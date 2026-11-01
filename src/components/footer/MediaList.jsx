import React from 'react'

function MediaList({href, target, src, alt}) {
  return (
    <>

    <li>

    <a href={href} target='_blank'>

    <img src={src} alt={alt} className='media'/>

    </a>

    </li>

    </>
  )
}

export default MediaList