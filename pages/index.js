import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const reactList = [
    {
      id: 1,
      name: "UI 라이브러리 모음집",
      link: "/react/ui_library",
    },
  ];
  const cssList = [
    {
      id: 1,
      name: "Loading Component",
      link: "",
      desscription: "React",
    },
  ];
  const javascriptList = [
    {
      id: 1,
      name: "React",
      link: "",
    },
  ];
  const tilList = [
    {
      id: 1,
      name: "React",
      link: "",
    },
  ];
  const githubList = [
    {
      id: 1,
      name: "Commit Convention",
      link: "https://github.com/Week-I-Learn/I-AM-LUCY/blob/main/Github/Commit%20Convention.md",
    },
  ];

  return (
    <>
      <div
        style={{
          width: 60,
          height: 60,
        }}
      ></div>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <h2>React</h2>
        {reactList.map((item) => (
          <Card key={item.id} onClick={() => router.push(item.link)}>
            <input type="checkbox" checked />
            <p
              className="p2"
              style={{
                marginLeft: 5,
              }}
            >
              {item.name}
            </p>
          </Card>
        ))}
        <h2>JavaScript</h2>
        {javascriptList.map((item) => (
          <Card key={item.id} onClick={() => window.open(item.link)}>
            <input type="checkbox" checked />
            <p
              className="p2"
              style={{
                marginLeft: 5,
              }}
            >
              {item.name}
            </p>
          </Card>
        ))}
        <h2>CSS</h2>
        {cssList.map((item) => (
          <Card key={item.id} onClick={() => window.open(item.link)}>
            <input type="checkbox" checked />
            <p
              className="p2"
              style={{
                marginLeft: 5,
              }}
            >
              {item.name}
            </p>
          </Card>
        ))}
        <h2>TIL</h2>
        {tilList.map((item) => (
          <Card key={item.id} onClick={() => window.open(item.link)}>
            <input type="checkbox" checked />
            <p
              className="p2"
              style={{
                marginLeft: 5,
              }}
            >
              {item.name}
            </p>
          </Card>
        ))}
        <h2>Github</h2>
        {githubList.map((item) => (
          <Card key={item.id} onClick={() => window.open(item.link)}>
            <input type="checkbox" checked />
            <p
              className="p2"
              style={{
                marginLeft: 5,
              }}
            >
              {item.name}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 35px;
  cursor: pointer;
`;
