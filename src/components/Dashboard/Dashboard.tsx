import Image from "next/image";
import"./Dashboard.css";
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-main">
      <div className="text-box">
        <h1>
          Hello, I'm <span>Kalyan</span> <span>Kashaboina</span>
        </h1>
        <h3>Fullstack Web Developer</h3>
        <p>
          Building awesome web experiences with the latest technologies.
          Passionate about creating seamless user interfaces and scalable
          back-end systems.
        </p>
      </div>
      {/* Enhance the css of the image-box and testbox class in Dashboard.css file. */}
      <div className="image-box">
      <Image
        src="/images/kalyan1.jpg" 
        alt="Kalyan"
        width={500}                 
        height={500}                
      />
      </div>
    </div>
  );
}

export default Dashboard;
