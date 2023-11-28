import { useNavigate } from "react-router-dom";

export const TaskCard = ({data=null}) => {
    const navigate = useNavigate();

    return (
        <div style={{background: "grey"}}
        onClick={() => {
            navigate(`/task/${data.id}`);
        }}
        >
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <label>
            <input
                type="checkbox"
                checked={data.done}
                onChange={() => {}}
                />
            Done
        </label>
        <hr/>
        </div>
    )
}