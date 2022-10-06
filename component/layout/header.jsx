import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
export default function HeaderSection() {
  const router = useRouter();
  return (
    <HeaderSectionStyle
      onClick={() => {
        router.push("/");
      }}
    >
      <h1>Lucy&apos;s Log</h1>
    </HeaderSectionStyle>
  );
}
const HeaderSectionStyle = styled.div`
  padding: 20px 0 0 0;
  margin-bottom: -25px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .logo {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f8d800;
    margin-left: 3px;
    margin-bottom: 5px;
  }
`;
