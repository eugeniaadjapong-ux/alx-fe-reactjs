import { useParams, Link } from "react-router-dom";
import data from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = data.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-center text-2xl mt-10">
        Recipe not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl">
        
        <Link
          to="/"
          className="text-blue-500 hover:underline mb-4 inline-block"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6">

          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          <h1 className="text-3xl font-bold mb-4">
            {recipe.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {recipe.summary}
          </p>

          <h2 className="text-2xl font-semibold mb-3">
            Ingredients
          </h2>

          <ul className="list-disc ml-6 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-3">
            Instructions
          </h2>

          <p className="text-gray-700">
            {recipe.instructions}
          </p>

        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;