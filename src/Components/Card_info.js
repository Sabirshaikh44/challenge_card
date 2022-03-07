
import React from 'react'
import Card_buttons from './Card_buttons'

export default function Card_info() {
  return (
    <div>
        <h1 className="name">Laura Smith</h1>
        <p className="proffesion proff_orangish_text">Frontend Developer</p>
        <small className="website_name website_greyish_text">laurasmith.website</small>
        <Card_buttons/>
    </div>
  )
}

