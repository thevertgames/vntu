import React from "react";
import { Descriptions } from "antd";
import styles from "./DogDetails.module.css";

interface DogDetailsProps {
    name: string;
    image: string;
    breed: string;
    description: string;
}

const DogDetails: React.FC<DogDetailsProps> = ({
                                                   name,
                                                   image,
                                                   breed,
                                                   description,
                                               }) => {
    return (
        <>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt={name} />
            </div>
            <Descriptions title={name} layout="vertical" bordered>
                <Descriptions.Item label="Breed">{breed}</Descriptions.Item>
                <Descriptions.Item label="Description">{description}</Descriptions.Item>
            </Descriptions>
        </>
    );
};

export default DogDetails;
