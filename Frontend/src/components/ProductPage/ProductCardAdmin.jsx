import React, { useState, useEffect } from "react";
import { Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define backend URL
const BACKEND_URL = 'http://localhost:5000';
// Fix default image path - point to an image that definitely exists
const defaultImage = "https://placehold.co/200x200?text=No+Image";

const AdminProductCard = ({ product, onDelete, onEdit }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoadAttempts, setImageLoadAttempts] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Debug product data on mount
  useEffect(() => {
    console.log("Admin product received:", {
      id: product.id,
      name: product.name,
      images: product.images,
      image: product.image
    });
  }, [product]);

  const handleImageError = (e) => {
    console.error("Image load error:", {
      productId: product.id,
      productName: product.name,
      attemptedSource: e.target.src,
      error: e,
      loadAttempts: imageLoadAttempts
    });

    setImageLoadAttempts(prev => prev + 1);
    
    // Try next image if available
    if (product.images && product.images.length > currentImageIndex + 1) {
      setCurrentImageIndex(prev => prev + 1);
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  // New approach to get image source with enhanced error handling
  const getImageSource = () => {
    if (imageError) {
      console.log("Using default image due to error");
      return defaultImage;
    }
    
    // Get available images
    const availableImages = product.images || [];
    const singleImage = product.image;
    
    console.log("Available image sources:", {
      imagesArray: availableImages,
      singleImage: singleImage,
      currentIndex: currentImageIndex
    });

    // Try to get image from array first
    let imagePath = availableImages[currentImageIndex];
    
    // If no image in array, try single image
    if (!imagePath && singleImage) {
      imagePath = singleImage;
    }
    
    // If still no image, use default
    if (!imagePath) {
      console.log("No image found, using default");
      return defaultImage;
    }
    
    // Process the image path
    if (typeof imagePath === 'string') {
      if (imagePath.startsWith('/uploads/')) {
        const fullPath = `${BACKEND_URL}${imagePath}`;
        console.log("Constructed full path from /uploads/:", fullPath);
        return fullPath;
      }
      if (imagePath.startsWith('uploads/')) {
        const fullPath = `${BACKEND_URL}/${imagePath}`;
        console.log("Constructed full path from uploads/:", fullPath);
        return fullPath;
      }
      if (imagePath.startsWith('http')) {
        console.log("Using direct URL:", imagePath);
        return imagePath;
      }
    }
    
    console.log("Using original image path:", imagePath);
    return imagePath;
  };

  const imageSource = getImageSource();
  console.log(`Admin Product: ${product.name}, Final image source: ${imageSource}`);

  return (
    <div className="min-h-[280px] p-5 pb-12 bg-white rounded-2xl shadow-xl border border-gray-100 relative transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img
          src={imageSource}
          alt={product.name}
          className="w-32 h-32 object-cover mx-auto rounded-md border border-gray-200 shadow-sm"
          onError={handleImageError}
        />
        
        {/* Debug info overlay */}
        <div className="absolute top-1 left-1 bg-black/50 text-white text-[8px] p-0.5 max-w-full overflow-hidden">
          {imageSource.slice(0, 20)}...
        </div>
        
        {/* Error indicator */}
        {imageError && (
          <div className="absolute top-1 right-1 bg-red-500 text-white text-[8px] p-0.5 rounded">
            Image Error
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 text-center mt-4 leading-tight">
        {product.name}
      </h3>
      <p className="text-sm text-gray-500 text-center mt-1 line-clamp-2">
        {product.description}
      </p>
      <div className="absolute bottom-3 right-3 flex gap-2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onEdit(product)}
        >
          <Edit className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onDelete(product.id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default AdminProductCard;
