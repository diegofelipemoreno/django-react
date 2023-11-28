import {Link} from 'react-router-dom';

export function Navigation() {
    return (
        <div>
            <Link to="/tasks"><h1>Task APP</h1></Link>
            
            <Link to="/task-create">Create task</Link>
        </div>
    )
}