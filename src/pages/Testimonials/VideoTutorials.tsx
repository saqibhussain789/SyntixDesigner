import React from 'react';
import { FaPlayCircle } from "react-icons/fa"; // For video play icon
import HTML from "../../assets/Testimonials/htmll.jpeg";
import Photo from "../../assets/Testimonials/Photography.jpeg";
import Marketing from "../../assets/Testimonials/Marketing.jpeg";

const VideosTutorials = () => {
  const videos = [
    { 
      id: 1, 
      title: "HTML Tutorials", 
      image: HTML, 
      author: "John Doe", 
      views: "1.2M views", 
      uploaded: "10 hours ago" 
    },
    { 
      id: 2, 
      title: "Photography", 
      image: Photo, 
      author: "Jane Smith", 
      views: "980K views", 
      uploaded: "2 days ago" 
    },
    { 
      id: 3, 
      title: "Marketing", 
      image: Marketing, 
      author: "Alex Johnson", 
      views: "500K views", 
      uploaded: "1 week ago" 
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-yellow-500">VIDEOS</h2>
        <h3 className="text-5xl font-extrabold text-gray-800">TUTORIALS</h3>
        <p className="text-gray-500 mt-4">
          Watch our video tutorials to enhance your learning experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="shadow-md rounded-lg overflow-hidden border hover:shadow-lg bg-white"
            >
              <div className="relative">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-40 object-cover"
                />
                <FaPlayCircle 
                  className="absolute text-white text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full" 
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-bold mt-2">{video.title}</h4>
                <p className="text-sm text-gray-500">By {video.author}</p>
                <p className="text-sm text-gray-400">
                  {video.views} • {video.uploaded}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6 mx-auto block hover:bg-teal-700">
          More Videos
        </button>
      </div>
    </section>
  );
};

export default VideosTutorials;
