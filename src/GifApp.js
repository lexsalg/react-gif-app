import { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Gif App</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  );
};
