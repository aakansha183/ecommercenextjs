
export interface ProductThumbnailsProps {
    thumbnails: string[];
    selectedThumbnail: number | null;
    handleThumbnailClick: (index: number) => void;
  }