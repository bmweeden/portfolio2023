import { Camera } from 'lucide-react';

export const Gallery = () => {
  const handleClick = () => {
    console.log('open gallery');
  };

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded border bg-indigo-600 border-indigo-700 text-white font-semibold transition hover:bg-indigo-700"
      onClick={handleClick}
    >
      <Camera size={18} />
      <span>Screenshots</span>
    </button>
  );
};
