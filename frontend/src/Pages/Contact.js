// Styled Components (Updated)
import styled from 'styled-components';
import React, { useState } from 'react';
const Container = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 40px;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.65);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  color: #f0f0f0;
  font-family: 'Inter', sans-serif;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 16px;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    margin-bottom: 32px;
    color: #cccccc;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #bbbbbb;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1rem;
  transition: background 0.3s, border 0.3s;

  &:focus {
    outline: 2px solid #5cc6ff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1rem;
  height: 120px;
  resize: vertical;

  &:focus {
    outline: 2px solid #5cc6ff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg,rgb(36, 12, 7),rgb(224, 53, 53));
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;


// ✅ Then the component
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Thanks for the feedback");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message:</Label>
          <Textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Send</Button>
      </Form>
    </Container>
  );
};

export default Contact;
