import Home from "./pages/Home";
// import Events from "./pages/Events";
import Accommodation from "./pages/Accomodation/Accomodation";
import Location from "./pages/Location";
import RegistrationFee from "./pages/Registration/RegistrationFee";
import RegistrationLink from "./pages/Registration/RegistrationLink";
// import RegistrationFAQ from "./pages/Registration/RegistrationFAQ";
// import Souvenir from "./pages/Souvenir";
// import Sponsors from "./pages/Sponsors";
import { Route, Routes } from "react-router-dom";
//import Committee from "./pages/Committee";
import CommonNews from "./pages/CommonNews";
import './App.css'
// import CommontemplateCommittee from "./pages/Committee/CommonTemplateCommittee";
// import Hotels from "./pages/Accomodation/Hotels";
// import SpeakerPage from "./pages/SpeakerPage";
// import InvitedSpeakerPage from "./pages/InvitedSpeakersPage";
import Submission from "./pages/Submission";
import Tracks from "./pages/Tracks";
// import IntCommittee from "./components/commonTemplate";
import OrganizingHeads from "./pages/Committee/OrganizingHeads";
import AdvisoryCommittee from "./pages/Committee/AdvisoryCommittee";
// import LocalCommittee from "./pages/Committee/LocalCommittee";
import Speakers from "./pages/speakersfront";
import Publications from "./pages/Publications";
import Awards from "./pages/awards";
import Sponsors from "./pages/Sponsors";
import Guidelines from "./pages/Guidelines";
import CommonTemplate from "./pages/CommonTemplate";

function App() {
   const confid="68adcb64e8f579b7ff662e45";
  return (
    <>

<div id="content ">
      < Routes >
      {/* https://xceed.nitj.ac.in/conferencemodule/commontemplate/671fb502dbcf15e8ac081476 */}
        <Route path="/" element={<Home confId={confid} />} />
        {/* <Route path="sponsorship" element={<Sponsors />} /> */}
        <Route path="tracks" element={<Tracks confid={confid}/>} />
        <Route path="guidelines" element={<Guidelines confid={confid}/>} />
        <Route path="submission" element={<Submission confid={confid}/>} />
        {/* <Route path="events" element={<Events />} /> */}
        <Route path="location" element={<Location confid={confid}  />} />
        <Route path="awards" element={<Awards confid={confid}  />} />

        <Route path="sponsors" element={<Sponsors confid={confid}  />} />

        <Route path="accommodation" element={<Accommodation confid={confid}/>} />
        {/* <Route path="hotelslist" element={<Hotels confid={confid}/>} /> */}
        {/* <Route path="souvenir" element={<Souvenir />} /> */}
        <Route path="speakers" element={<Speakers confid={confid} />} />
        {/* <Route path="invitedspeakers" element={<InvitedSpeakerPage confid={confid} />} /> */}
        <Route path="registrationfee" element={<RegistrationFee confid={confid} />} />
        <Route path="registrationlink" element={<RegistrationLink />} />
        {/* <Route path="registrationfaq" element={<RegistrationFAQ pageid="682c2dbe4f0ddcc436b90e88" />} /> */}
        {/* <Route path="advisorycommittee" element={<CommontemplateCommittee pageid="682c2dbe4f0ddcc436b90e88" />} /> */}
        {/* <Route path="localcommittee" element={<CommontemplateCommittee pageid="682c2dbe4f0ddcc436b90e88" />} /> */}
        <Route path="news/:newsid" element={<CommonNews /> } />
        {/* <Route path="commontemplate" element={<IntCommittee />} /> */}
        <Route path="organizingheads" element={<OrganizingHeads confid={confid} />} />
        <Route path="advisorycommittee" element={<AdvisoryCommittee confid={confid} />} />    
        {/* <Route path="localcommittee" element={<LocalCommittee confid={confid} />} /> */}
        <Route path="publications" element={<Publications confid={confid} />} />
        <Route path="/:templateid" element={<CommonTemplate confid={confid} />} />


      </Routes >
      </div>
    </>
  );
}

export default App;


