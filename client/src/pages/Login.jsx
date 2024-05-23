import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button, Link } from "@nextui-org/react";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const onClickLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const userDetails = {
      email,
      password,
    };

    const apiUrl = "https://namma-freelance.onrender.com/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(apiUrl, options);
      if (response.ok) {
        // Login successful
        navigate("/"); // Redirect to homepage or dashboard
      } else {
        // Login failed
        console.error("Login failed:", response.statusText);
        // Handle error, e.g., display error message to user
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error, e.g., display error message to user
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="login-section flex flex-col">
      <nav className="flex items-center justify-center">
        <img
          src="./nammafreelancelogo.gif"
          className="px-10 max-w-[70%] lg:max-w-[30%] mix-blend-screen"
        />
      </nav>
      <section className="flex-1 flex flex-col justify-center relative ml-auto w-full lg:w-[40%] xl:w-[40%] xl:pr-10 items-center lg:items-start px-10">
        <form className="z-10 w-full" onSubmit={onClickLogin}>
          <h1 className="karnataka-gradient text-xl lg:text-2xl font-bold">
            Sign In
          </h1>
          <p className="text-white text-semibold mb-4 lg:mb-8">
            Type your username and password to sign in
          </p>
          <Input
            isRequired
            type="email"
            label="Email"
            className="mb-4"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
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
            className="mb-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mr-auto">
            <Link className="w-[90%] mb-4 xl:max-w-[75%] text-white underline">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className=" mb-3 w-full text-white px-2 py-4  register-button"
          >
            Sign in
          </Button>
          <p className="mr-auto text-white">
            Don&apos;t have an account?{" "}
            <Link
              className="w-[90%] inline mb-4 xl:max-w-[75%] underline"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register Here
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default Login;
