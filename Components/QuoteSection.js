import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Cooking is about transformation, and at the heart of that is the transformation of the cook. You start with raw ingredients, and through skill, patience, and care, you create something that nourishes and connects people.</p>
            <p className="qoute-auther">- Anthony Bourdain</p> 
        </div>
    )
}
