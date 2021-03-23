import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  background: #456C86;
  border-radius: 6px;
  min-height: 20vh;
  :hover{
    transition: box-shadow .3s,border-color .3s,-webkit-box-shadow .3s;
  }
`;

const Cover = styled.div`
  border-radius: 6px;
  background: url('${(props) => props.image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 20vh;
`;

const CardBody = styled.div`
  padding: 18px;
  text-align: left;
  font-size: 14px;
  color: white;

`

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`

export default function Card({
  cover = "https://source.unsplash.com/random",
  title = "Hello World",
  description = "LoremIpsum",
  actions = {},
  snapshot,
}) {
  return (
    <CardWrapper>
      <Cover image={cover}/>
      <CardBody>
        <Title>{title}</Title>
        <p>{description}</p>
      </CardBody>
    </CardWrapper>
  );
}
