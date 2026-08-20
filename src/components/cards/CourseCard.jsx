import React from 'react';

export default function CourseCard({ title, description, imageUrl, tag, tagColor }) {
  return (
    <div className="bg-surface-container-lowest border-2 border-border-color rounded-xl p-md flex flex-col gap-md">
      <div className="relative h-40 w-full rounded-lg overflow-hidden bg-secondary-container/20">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        {tag && (
          <span className={`absolute top-sm right-sm ${tagColor} text-white font-label-caps text-[10px] px-sm py-xs rounded-full uppercase`}>
            {tag}
          </span>
        )}
      </div>
      <div>
        <h4 className="font-headline-md text-headline-md text-on-surface">{title}</h4>
        <p className="font-body-md text-gray-text">{description}</p>
      </div>
      <button className="bg-primary-container text-on-primary-container font-headline-md py-sm rounded-xl uppercase tracking-wider">
        Start Learning
      </button>
    </div>
  );
}
