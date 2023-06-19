import styled from "styled-components";
import { Buttons } from "../components/Buttons";
import { useEffect, useRef, useState } from "react";
import { validate } from "../validate";
import { GITHUB_API } from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateIssue = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const navigation = useNavigate();
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  useEffect(() => {
    if (inputTitle) {
      titleRef.current.classList.remove("error");
    }
    if (inputBody) {
      bodyRef.current.classList.remove("error");
    }
  }, [inputTitle, inputBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validate(e, titleRef, bodyRef);
    if (!result) return;
    postIssue();
  };

  const postIssue = async () => {
    try {
      await axios.post(
        `${GITHUB_API}/repos/bananashow/pokemon/issues`,
        {
          title: inputTitle,
          body: inputBody,
        },
        {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_TOKEN,
            "Content-Type": "applications/json",
          },
        }
      );
    } catch (err) {
      console.error(err);
    } finally {
      navigation("/", { replace: true });
    }
  };

  return (
    <>
      <Container>
        <Avatar />
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <input
              placeholder="Title"
              name="title"
              ref={titleRef}
              onChange={(e) => setInputTitle(e.target.value)}
              value={inputTitle}
            ></input>
            <textarea
              ref={bodyRef}
              placeholder="Leave a comment"
              name="body"
              onChange={(e) => setInputBody(e.target.value)}
              value={inputBody}
            ></textarea>
            <ButtonWrapper>
              <Buttons
                style={{
                  fontSize: "14px",
                  backgroundColor: "green",
                  color: "white",
                }}
                type="submit"
              >
                Submit new issue
              </Buttons>
            </ButtonWrapper>
          </InputWrapper>
        </form>
      </Container>
    </>
  );
};

const Border = styled.div`
  border: 1px solid #d0d7de;
  border-radius: 6px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  padding: 0 32px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: firebrick;
  margin-right: 10px;
`;

const InputWrapper = styled(Border)`
  width: 100%;
  padding: 8px;

  input,
  textarea {
    border: 1px solid #d0d7de;
    border-radius: 6px;
    width: 100%;
    background-color: #f6f8fa;
    padding: 5px 12px;
    line-height: 20px;
    box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  }

  textarea {
    height: 200px;
    min-height: 200px;
    margin-top: 8px;
  }

  .error {
    outline-color: firebrick;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
