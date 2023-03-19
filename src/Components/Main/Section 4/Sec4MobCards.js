import React from "react";
import { Card } from "react-bootstrap";

function Sec4MobCards({title, contentText, desc, img, imgAlt, contentLink}) {
    return (
        <Card style={{ width: "15.6rem" }}>
            <Card.Img variant="top" src={img} alt={imgAlt} />
            <Card.Body>
                <p>{contentText}</p>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Link href="#">{contentLink}</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Sec4MobCards;
