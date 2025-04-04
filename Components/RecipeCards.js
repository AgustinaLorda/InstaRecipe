import CustomImage from "./Customimage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>
            <div className="recipe-card-info">
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Description</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            
            </div>
        </div>
    )
}
