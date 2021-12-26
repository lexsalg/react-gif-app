import { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

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
