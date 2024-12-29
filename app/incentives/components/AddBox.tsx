import React, { useState } from "react";

type DialogBoxProps = {
  onConfirm: (data: { title: string; description: string; image: File | null }) => void;
  onCancel: () => void;
};

const DialogBox = ({ onConfirm, onCancel }: DialogBoxProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image file selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);

    // Preview image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = () => {
    onConfirm({ title, description, image });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter description"
            rows={3}
          />
        </div>

        {/* Image Upload Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Upload Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-gray-700 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mb-4 flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
