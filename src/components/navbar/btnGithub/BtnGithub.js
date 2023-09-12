import "./style.css";
import githubIcon from "./../../../img/icons/gitHub-black.svg";
const BtnGithub = (link) => {
    return (  <a href={link} target="blank" rel="noreferrer" className="btn-outline">
    <img src={githubIcon} alt="" />
    GitHub repo
</a>);
}
 
export default BtnGithub;