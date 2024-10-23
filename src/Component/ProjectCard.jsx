import React from 'react'

export default function ProjectCard({link }) {
  return (
    <iframe
    className='px-2'
    width="100%"
    height="300"
    src={link}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  )
}
