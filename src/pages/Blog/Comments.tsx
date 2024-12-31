import { useState } from "react";
import A1 from "../../assets/Blog/Author1.png"
import A2 from "../../assets/Blog/Author2.png"
import A3 from "../../assets/Blog/Author3.png"

const UserComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Maude Hall",
      time: "14 min",
      text: "That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.",
      avatar: A1,
    },
    {
      id: 2,
      name: "Dianne Russell",
      time: "20 min",
      text: "But don’t you think the timing is off because many other apps have done this even earlier, causing people to switch apps?",
      avatar: A2,
    },
    {
      id: 3,
      name: "Esther Howard",
      time: "25 min",
      text: "This could be due to them taking their time to release a stable version.",
      avatar: A3,
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: "You",
          time: "Just now",
          text: newComment,
          avatar: A1,
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-left mb-8">
          <h2 className="text-4xl font-bold text-yellow-500">USER COMMENTS &</h2>
          <h3 className="text-5xl font-extrabold text-gray-800">DISCUSSIONS</h3>
          <p className="mt-4 text-gray-500 text-lg">
            Please share your feedback and join the discussion below.
          </p>
        </div>

        {/* Thread Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl justify-between">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
            <h4 className="text-xl font-bold">Thread</h4>
            <button className="text-gray-500">&times;</button>
          </div>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-4">
                <img
                  src={comment.avatar}
                  alt={comment.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h5 className="text-sm font-bold text-gray-800">
                    {comment.name}
                    <span className="ml-2 text-xs text-gray-500">
                      {comment.time}
                    </span>
                  </h5>
                  <p className="text-gray-600 text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Comment Input */}
          <div className="mt-6 border-t pt-4">
            <textarea rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Type your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <button className="text-gray-500">&#x1F4DD;</button>
                <button className="text-gray-500">&#128247;</button>
                <button className="text-gray-500">&#128100;</button>
              </div>
              <button
                className="px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg"
                onClick={handleAddComment}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
