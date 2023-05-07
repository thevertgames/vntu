import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import HomePage from "./pages/HomePage";
import DogPage from "./pages/DogPage";
import styles from "./App.module.css";

const { Content, Footer } = Layout;

const App: React.FC = () => {
    return (
        <Router>
            <Layout style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Content className={styles.content}>
                        <Routes>
                            <Route index element={<HomePage />} path="/" />
                            <Route element={<DogPage />} path="/dog/:id" />
                        </Routes>
                    </Content>
                    <Footer className={styles.footer}>Dog blog &copy; {new Date().getFullYear()}</Footer>
                </div>
            </Layout>
        </Router>
    );
};

export default App;
