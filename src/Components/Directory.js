import styled from "styled-components";
import { Category } from "../Components/Category";
import { categories } from "../Constants/categories";

const Directory = () => {
  return (
    <DirectoryWrap>
      {categories.map(({ id, title, imageUrl, route }) => (
        <Category key={id} title={title} imageUrl={imageUrl} route={route} />
      ))}
    </DirectoryWrap>
  );
};

export default Directory;

const DirectoryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: "Open Sans", sans-serif;
`;
