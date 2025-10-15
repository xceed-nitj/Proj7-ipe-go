import { useState, useEffect } from "react";
import axios from "axios";
import getEnvironment from "../getenvironment";
import Slider from "../components/Slider";

function AboutNews({ confid }) {
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    getEnvironment().then(url => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (apiUrl && confid) {
      axios
        .get(`${apiUrl}/conferencemodule/home/conf/${confid}`, { withCredentials: true })
        .catch(err => console.log(err));
      axios
        .get(`${apiUrl}/conferencemodule/announcements/conf/${confid}`, { withCredentials: true })
        .catch(err => console.log(err));
    }
  }, [apiUrl, confid]);

  return (
    <div className="bg-white relative overflow-hidden">
      <Slider confid={confid} />
    </div>
  );
}

export default AboutNews;
