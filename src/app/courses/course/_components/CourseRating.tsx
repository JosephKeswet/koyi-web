import React, { useState } from "react";
import { Check, Star } from "lucide-react";

export default function CourseRating() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // Function to set the rating based on the selected star
  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">
        How will you rate the course?
      </h2>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleRating(index)}
            className="text-gray-400 hover:text-yellow-500"
          >
            <Star
              size={30}
              className={index < rating ? "text-yellow-500" : "text-gray-300"}
            />
          </button>
        ))}
      </div>

      {/* Comment Section */}
      <textarea
        className="w-full p-4 mb-6 border-b border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Drop a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />

      {/* Buttons */}
      <div className="flex justify-between">
        <button className="px-6 py-3 text-sm font-semibold text-gray-700 border border-gray-400 rounded-md">
          Cancel
        </button>
        <button className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}
