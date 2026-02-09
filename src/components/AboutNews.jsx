import { useState, useEffect } from "react";
import axios from "axios";
import getEnvironment from "../getenvironment";

function AboutNews({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    getEnvironment().then(url => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl && confid) {
      axios
        .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, {
          withCredentials: true,
        })
        .then(res => {
          const sorted = res.data
            .filter(item => !item.hidden)
            .sort((a, b) => a.sequence - b.sequence);
          setAnnouncements(sorted);
        })
        .catch(err => console.log(err));
    }
  }, [apiUrl, confid]);

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
          Announcements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.length > 0 ? (
            announcements.map(item => (
              <div
                key={item._id}
                className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg shadow-[#2563eb]/10 hover:shadow-[#2563eb]/20 transition-all"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{item.metaDescription}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Learn More →
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">No announcements available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutNews;
