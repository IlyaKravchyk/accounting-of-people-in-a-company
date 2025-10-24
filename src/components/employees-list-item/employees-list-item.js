import "./employees-list-item.css";
import {Component} from "react";

class EmployeesListItem extends Component {
    render() {
        const {name, salary, increase, rise, onToggleIncrease, onToggleRise, onDeletedPeople} = this.props;

        return (
            <li className={`list-group-item  ${rise && "like"} ${increase && "increase"}`}>
                <span className="list-group-item-label" onClick={onToggleRise}>
                    {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={onToggleIncrease} type="button" className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button onClick={onDeletedPeople} type="button" className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;
