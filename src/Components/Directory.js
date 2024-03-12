import Category from "../Components/Category";
import { categories } from "../Constants/categories";

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title, imageUrl }) => (
        <Category key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
