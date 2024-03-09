import "./FrameworkCard.css"

const FrameworkCard = ({ id, name, type }) => {
    return (
        <ul className="framework-card">
            <li>{id}</li>
            <li>{name}</li>
            <li>{type}</li>
        </ul>
    );
};

export default FrameworkCard;
