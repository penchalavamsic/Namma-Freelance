import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const CreateProfile = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [userType, setUserType] = useState("freelancer");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 h-full flex flex-col lg:flex-row gap-10 bg-black p-5 lg:p-10">
        <div className="lg:w-[45%] form-bg">
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <form className="z-[4]">
            <h2 className="text-white text-2xl font-semibold mb-3">
              Personal Details
            </h2>
            <div className="flex flex-col lg:flex-row gap-5 w-full mb-4">
              <input
                type="text"
                className="pink-gradient input-text text-white"
                placeholder="First Name"
              />
              <input
                type="text"
                className="pink-gradient input-text text-white"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mb-4">
              <textarea
                placeholder="Bio"
                cols={8}
                rows={4}
                className="input-text blue-gradient"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 w-full mb-4">
              <input
                type="text"
                className="pink-gradient input-text text-white"
                placeholder="Mobile Number"
              />
              <input
                type="text"
                className="pink-gradient input-text text-white"
                placeholder="Location"
              />
            </div>
            <div className="flex gap-5 flex-col lg:flex-row    mb-4">
              <select
                className="input-text blue-gradient"
                onChange={handleTypeChange}
              >
                <option value="freelancer">Freelancer</option>
                <option value="client">client</option>
              </select>

              {userType === "freelancer" && (
                <input
                  type="text"
                  className="input-text blue-gradient"
                  placeholder="Freelance Domain"
                />
              )}
            </div>
            <h2 className="text-white text-2xl font-semibold mb-3">Projects</h2>
            <div className="flex gap-10 w-full">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Title"
                  className="input-text pink-gradient w-full mb-3"
                />
                <textarea
                  placeholder="Description"
                  cols={8}
                  rows={4}
                  className="input-text blue-gradient mb-3"
                ></textarea>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Title"
                  className="input-text pink-gradient w-full mb-3"
                />
                <textarea
                  placeholder="Description"
                  cols={8}
                  rows={4}
                  className="input-text blue-gradient mb-3"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-3">
          <div className="form-bg flex-1">
            <div className="layer-3"></div>
            <div className="z-[10]">
              <h2 className="text-2xl text-white font-semibold mb-3">
                Social Links
              </h2>
              <div>
                <input
                  type="text"
                  className="input-text pink-gradient mb-4"
                  placeholder="Instagram"
                />
                <input
                  type="text"
                  className="input-text blue-gradient mb-4"
                  placeholder="Facebook"
                />
                <input
                  type="text"
                  className="input-text pink-gradient mb-4"
                  placeholder="Linkedin"
                />
                <input
                  type="text"
                  className="input-text blue-gradient mb-4"
                  placeholder="Youtube"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1715494600/hampi_1_thds2b.png"
                className="w-full max-w-[450px] opacity-80 mx-auto"
              />
            </div>
          </div>
          <button className="btn text-white pink-gradient py-4 rounded-md">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CreateProfile;
