import { useCallback, useState } from 'react';
import { Camera } from 'lucide-react';
import ImageViewer from 'react-simple-image-viewer';

export const Gallery = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded border bg-indigo-600 border-indigo-700 text-white font-semibold transition hover:bg-indigo-700"
        onClick={openImageViewer}
      >
        <Camera size={18} />
        <span>Screenshots</span>
      </button>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
};
