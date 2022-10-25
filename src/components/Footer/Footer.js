import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
        <h1>Footer</h1>
        <Link to="/pp2">
          <button>
            pp2
          </button>
        </Link>
    </footer>
  )
}
