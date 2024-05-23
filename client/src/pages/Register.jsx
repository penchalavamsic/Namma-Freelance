import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, Link } from "@nextui-org/react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onClickSignin = () => {
    navigate("/");
  };

  const onClickRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError(null);

    const apiUrl = "https://namma-freelance.onrender.com/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        // Registration successful
        navigate("/create-profile"); // Redirect to homepage or login page
      } else {
        // Registration failed
        const errorData = await response.json();
        setError(errorData.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-section register-section flex flex-col">
      <nav className="flex items-center justify-center">
        <img
          src="./nammafreelancelogo.gif"
          className="px-10 max-w-[70%] lg:max-w-[30%] mix-blend-screen"
        />
      </nav>
      <section className="flex-1 flex flex-col justify-center relative ml-auto w-full lg:w-[40%] xl:w-[40%] xl:pr-10 items-center lg:items-start px-5 lg:px-10">
        <form className="z-10 w-full" onSubmit={onClickRegister}>
          <h1 className="karnataka-gradient text-xl lg:text-2xl font-bold mb-4">
            Register Now
          </h1>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            label="First Name"
            className="w-[90%] mb-4 xl:max-w-[75%]"
          />
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            label="Last Name"
            className="w-[90%] mb-4 xl:max-w-[75%]"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            label="Mail ID"
            className="w-[90%] mb-4 xl:max-w-[75%]"
          />
          <Input
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoIosEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoIosEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="w-[90%] mb-1 xl:max-w-[75%]"
          />
          <div className="mr-auto">
            <Link className="w-[90%] mb-4 xl:max-w-[75%] text-white underline">
              Forgot Password?
            </Link>
          </div>
          {error && (
            <p className="text-red-500 mb-2">
              {error}
            </p>
          )}
          <Button
            type="submit"
            className="w-[90%] mb-3 xl:max-w-[75%] text-white px-2 py-4  register-button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register Here"}
          </Button>
          <p className="mr-auto text-white">
            Already have an account?{" "}
            <Link
              className="w-[90%] inline mb-4 xl:max-w-[75%] underline"
              onClick={onClickSignin}
            >
              Sign in Here
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Register;
