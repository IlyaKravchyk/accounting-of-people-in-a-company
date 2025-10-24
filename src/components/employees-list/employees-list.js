import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({data, onToggleIncrease, onToggleRise, onDeletedPeople}) => {
    const isEmpty = data.length <= 0;
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
    console.log(isEmpty);
    return (
        <ul className={`${isEmpty ? "app-list-empty" : "app-list list-group"}`}>
            {!isEmpty && renderItems()}
            {isEmpty && <div>Добавьте сотрудников</div>}
        </ul>
    );
};

export default EmployeesList;
