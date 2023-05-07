import React from "react";
import { Row, Col } from "antd";
import DogCard from "../components/DogCard/DogCard";
import { dogs } from "../data/dogs";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Dog List</h1>
            <Row gutter={[16, 16]}>
                {dogs.map((dog) => (
                    <Col key={dog.id}>
                        <DogCard id={dog.id} name={dog.name} image={dog.image} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default HomePage;
