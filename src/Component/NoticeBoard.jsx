import React, { useState, useEffect } from "react";

const NoticeBoard = () => {
  // State to store fetched notices
  const [notices, setNotices] = useState([]);

  // Simulate fetching notices (you can replace this with an actual API call)
  useEffect(() => {
    const fetchNotices = async () => {
      const response = [
        {
          id: 1,
          date: "12th Dec",
          time: "10:06:15",
          title: "Notice Admission List (4th Phase)",
          description: "Admissions for 2023 have started. Check the full list here.",
        },
        {
          id: 2,
          date: "11th Dec",
          time: "21:10:37",
          title: "Admission List Phase 4 (Language Test)",
          description: "Language test for admission phase 4 completed.",
        },
        {
          id: 3,
          date: "11th Dec",
          time: "20:57:32",
          title: "Admission List (Phase 4) - Session 2023",
          description: "Check the updated admission list for session 2023.",
        },
      ];

      setNotices(response); // Set notices in state
    };

    fetchNotices();
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-green-700 mb-4">General Notice Board</h2>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="border-b pb-3">
            <div className="flex items-center mb-2">
              <span className="bg-purple-700 text-white font-bold px-2 py-1 rounded-md mr-4">
                {notice.date}
              </span>
              <span className="text-gray-600">{notice.time}</span>
            </div>
            <h3 className="text-green-800 font-semibold">{notice.title}</h3>
            <p className="text-gray-700">{notice.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <a href="/all-notices" className="text-blue-600 hover:underline">
          All Notices
        </a>
      </div>
    </div>
  );
};

export default NoticeBoard;
