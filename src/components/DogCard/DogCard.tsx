import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

interface DogCardProps {
    id: number;
    name: string;
    image: string;
}

const { Meta } = Card;

const DogCard: React.FC<DogCardProps> = ({ id, name, image }) => {
    return (
        <Link to={`/dog/${id}`}>
            <Card
                hoverable
                style={{ width: 240, marginBottom: 16, maxHeight: 400, display: "flex", flexDirection: "column" }}
                cover={<img alt={name} src={image} style={{ objectFit: "cover", maxHeight: "70%", minHeight: 200 }} />}
            >
                <Meta title={name} />
            </Card>
        </Link>
    );
};

export default DogCard;
