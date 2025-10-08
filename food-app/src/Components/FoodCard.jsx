import {Link } from 'react-router-dom'
import '../styles/Pages.css'

export default function FoodCard({ image, title, subtitle, rating}) {
    return (
        <Link to="/product" className="food-card">
            <img src={image} alt={title} className="food-img" />
            <div className="food-info">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <div className="rating">⭐ {rating}</div>
            </div>
            <button className="fav-btn">♡</button>
        </Link>
    )
}