

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import Home from "./Home";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Something went wrong");
    }
  };

  return (
    <Container>
      <Content>
        <Heading>Login</Heading>
        <Form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit" disabled={loading}>
  {loading ? "Logging in..." : "Login"}
</LoginButton>

        </Form>
        <StyledLink to="/register">New User? Register here</StyledLink>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${require("../assets/humanheart.jpeg")});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 40px;
  background: rgba(30, 30, 30, 0.8);
  border-radius: 18px;
  backdrop-filter: blur(12px);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
  color: #f0f0f0;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background: #fff;
  color: #333;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg,rgb(36, 12, 7),rgb(224, 53, 53));
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #007bff, #5cc6ff);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    background: linear-gradient(135deg, #0062cc, #4c8bff);
    box-shadow: none;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  color:rgb(215, 10, 10);
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Login;
