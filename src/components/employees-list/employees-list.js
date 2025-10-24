import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onToggleIncrease, onToggleRise, onDeletedPeople}) => {
    const renderItems = () =>
        data.map((item) => (
            <EmployeesListItem
                key={item.id}
                {...item}
                onToggleIncrease={() => onToggleIncrease(item.id)}
                onToggleRise={() => onToggleRise(item.id)}
                onDeletedPeople={() => onDeletedPeople(item.id)}
            />
        ));

    return <ul className="app-list list-group">{renderItems()}</ul>;
};

export default EmployeesList;
