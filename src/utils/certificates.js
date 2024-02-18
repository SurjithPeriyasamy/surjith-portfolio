import react from "../images/certificates/react-certificate.png";
import frontEnd from "../images/certificates/hackerRankReact.png";
import javascript from "../images/certificates/Namaste-javascript.webp";
import reactBasics from "../images/certificates/react-basics.png";

function certificateObj(id, title, url, description, image) {
  return {
    id,
    title,
    url,
    description,
    image,
  };
}

const CERTIFICATES = [
  certificateObj(
    1,
    "Frontend Developer (React)",
    "https://www.hackerrank.com/certificates/9f42c0c57901",
    "HackerRank is the market-leading coding test and interview solution for hiring developers. Successfully Passed the HackerRank Front-End Developer's Role Exam ",
    frontEnd
  ),
  certificateObj(
    2,
    "React (Basic)",
    "https://www.hackerrank.com/certificates/e0491ae247cf",
    "HackerRank is the market-leading coding test and interview solution for hiring developers. Successfully Passed the HackerRank Assessment for the Skill (React) ",
    reactBasics
  ),
  certificateObj(
    3,
    "NAMASTE REACT",
    "https://drive.google.com/file/d/1tLsVH-La6P-mrwYkpWOQsz3midDBZTFY/view?usp=drive_link",
    "Namaste Dev is an online platform to learn FrontEnd Development related course. I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev).",
    react
  ),
  certificateObj(
    4,
    "NAMASTE JAVASCRIPT",
    "https://www.hackerrank.com/certificates/9f42c0c57901",
    "Namaste Dev is an online platform to learn FrontEnd Development related course. I join for learn Javascript (Namaste Javascript). Now I finished Javascript Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev)",
    javascript
  ),
];
export default CERTIFICATES;
// {
//     id:1,
//     title:"NAMASTE REACT",
//     url:"https://courses.namastedev.com/learn/certificate/8482819-142240",
//     description:'Namaste Dev is an online platform to learn FrontEnd Development related course. So I join for learn React JS Developer Course(Namaste React). Now I finished ReactJS Course with valid cerification authorized by AkshaySaini(founder of Namaste Dev).',
//     image:certificate

// }
// {
//     id:2,
//     title:"Frontend Developer (React)",
//     url:"https://www.hackerrank.com/certificates/9f42c0c57901",
//     description:'HackerRank is the market-leading coding test and interview solution for hiring developers. Start hiring at the pace of innovation!.I Passed the HackerRank Role Certification Exam for Front-End Developer Role',
//     certificate
// }
