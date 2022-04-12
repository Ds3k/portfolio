import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
            <a href='https://www.github.com/ds3k' target='_blank' rel='noreferrer'>
              <div><BsGithub /></div>
            </a>
            <a href='https://twitter.com/Ds3k_Inn' target='_blank' rel='noreferrer'>
              <div><BsTwitter /></div>
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
              <div><BsInstagram /></div>
            </a>
    </div>
  )
}

export default SocialMedia