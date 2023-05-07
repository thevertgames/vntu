import React from "react";
import DogDetails from "../components/DogDetails/DogDetails";
import { dogs, Dog } from "../data/dogs";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";

const DogPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dogId = parseInt(id ?? "", 10);
    const dog = dogs.find((dog: Dog) => dog.id === dogId);

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    if (!dog) {
        return <div>No dog found.</div>;
    }

    return (
        <>
            <h1>Information about the dog:</h1>
            <DogDetails
                name={dog.name}
                image={dog.image}
                breed={dog.breed}
                description={dog.description}
            />
            <div style={{ marginTop: "20px" }}>
                <Button onClick={handleBackClick} type="primary" style={{ backgroundColor: "black", borderColor: "black" }}>
                    Go back
                </Button>
            </div>
        </>
    );
};

export default DogPage;
