import React, { useState } from "react";
import { Layout, Button } from "antd";
import { GithubFilled, GithubOutlined } from "@ant-design/icons";

import "./App.css";

const { Header, Footer, Content } = Layout;
const CLIENT_ID = "7fe013c90e0777329367";
const REDIRECT_URI = "http://localhost:3000/";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Layout className="App">
      <Header className="App-header">
        <h1>GitClean</h1>
      </Header>
      <Content className="App-content">
        <h1>Simple GitHub organization. Powerful results.</h1>
        <p>
          Easily organize your GitHub profile by storing or deleting old
          repositories.
        </p>
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
        >
          <Button type="primary" shape="round" icon={<GithubOutlined />}>
            TRY NOW
          </Button>
        </a>
      </Content>
      <Footer className="App-footer">
        <a href="https://github.com/arriadevoe/git-clean">
          <GithubFilled />
        </a>
      </Footer>
    </Layout>
  );
}

export default App;
