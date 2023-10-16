import React from 'react';

const Sidebar = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <div className='w-1/4 p-4 '>
      <h2 className='text-lg font-semibold mb-2'>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer mb-2 ${
              selectedCategory === category ? 'text-red-500' : ''
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
