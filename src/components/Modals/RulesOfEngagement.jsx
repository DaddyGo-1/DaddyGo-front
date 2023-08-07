import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";

function RulesOfEngagement(props) {
  const navigate = useNavigate();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h1 className="text-2xl">Site Engagement Rules</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
     
    <p>Below are the terms and conditions for admin access. Any violation of any of the rules would lead to the immediate removal of admin permissions and possible account deletion.</p>
    <p>As an admin you are granted exclusive access to create, update and delete posts on the website, this is a feature available to only admins who have been verified.</p>
    
    <h2 className="text-xl mt-4">The following rules must be duly observed when using admin privileges.</h2>
    <ol>
        <li>Accurate Sourcing: Users must ensure that any information they post is accurate and supported by reliable sources. Misrepresenting facts or spreading false information is strictly prohibited.</li>
        <li>Credible Sources: When sharing information, users must use credible and reputable sources. Personal opinions or unverified claims should be clearly labeled as such.</li>
        <li>Fact-Checking: Users are encouraged to fact-check before posting any information. If a mistake is made, promptly correct it and explain.</li>
        <li>Hate Speech Prohibition: Hate speech, including discriminatory, offensive, or derogatory content targeting individuals or groups based on attributes such as race, religion, gender, sexual orientation, etc., is strictly forbidden.</li>
        <li>Respectful Discourse: All discussions should be conducted respectfully and civilly. Disagreements are allowed, but personal attacks, insults, or harassment will not be tolerated.</li>
        <li>No Incitement: Users must not incite violence, hatred, or harm towards any individual or group through their posts.</li>
        <li>Inclusive Language: Use language that is inclusive and sensitive to diverse perspectives and backgrounds. Avoid terms, slurs, or expressions that could be offensive or exclusionary.</li>
        <li>Reporting False Information: Users are encouraged to report any instances of false information they come across. Reporting can help maintain the accuracy and quality of the content on the site.</li>
        <li>Moderator Instructions: Follow the instructions of site moderators. If a moderator flag or removes content, users should cooperate and refrain from reposting the flagged content.</li>
        <li>Responsible Sharing: Users should be mindful of the potential consequences of sharing information. Think about the impact your posts might have and avoid spreading unverified or potentially harmful content.</li>
        <li>Contextual Understanding: Consider the broader context and implications of the information you share. Ensure that your posts contribute positively to the overall knowledge and understanding of the topic.</li>
        <li>Engage Constructively: Engage in meaningful discussions and debates that promote learning and understanding. Contribute thoughtful insights and encourage others to do the same.</li>
        <li>Accountability: Users are responsible for the content they post. Any legal or ethical consequences arising from their posts are their responsibility.</li>
        <li>Continuous Learning: Stay open to learning from others and adjusting your views based on new information. Engaging in respectful debates can lead to a deeper understanding of different perspectives.</li>
        <li>Consequences for Violations: Violations of these rules may result in warnings, temporary suspensions, or permanent bans from using the site, depending on the severity and frequency of the offense.</li>
    </ol>
    <p>By adhering to these rules, users can help create a respectful, informative, and safe online environment for all members of the community.</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <button
          class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default RulesOfEngagement;
