import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-surface border border-border-black rounded-xl overflow-hidden flex flex-col transition-transform active:scale-[0.98]">
      <div className="h-40 w-full relative bg-surface-container">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
          data-alt={product.imageAlt}
        />
      </div>
      <div className="p-md flex flex-col gap-sm flex-1">
        <h3 className="font-headline-md text-body-md font-bold leading-tight line-clamp-2">{product.name}</h3>
        <div className="space-y-xs">
          <p className="font-headline-md text-border-black">{product.price}</p>
          <span className={`inline-block ${product.feeColor} text-white px-sm py-xs border border-border-black rounded font-label-bold text-[10px]`}>
            {product.feeText}
          </span>
        </div>
        <button className="mt-auto w-full border border-border-black bg-primary-container text-border-black font-label-bold py-xs rounded-lg hover:bg-primary transition-colors active:translate-x-0.5 active:translate-y-0.5">
          + Tambah
        </button>
      </div>
    </div>
  );
}
