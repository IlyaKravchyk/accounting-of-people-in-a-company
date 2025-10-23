import "./app-filter.css";
import {Component} from "react";

class AppFilter extends Component {
    buttonsData = [
        {
            name: "all",
            descriptionButton: "Все сотрудники",
            id: 0,
        },
        {
            name: "rise",
            descriptionButton: "На повышение",
            id: 1,
        },
        {
            name: "salary",
            descriptionButton: "З/П больше 1000$",
            id: 2,
        },
    ];

    render() {
        const {onSetFilterGroup, filterGroup} = this.props;

        const renderButtons = () => {
            return this.buttonsData.map(({name, descriptionButton, id}) => {
                return (
                    <button
                        key={id}
                        onClick={() => onSetFilterGroup(name)}
                        type="button"
                        className={`btn ${filterGroup === name ? "btn-light" : "btn-outline-light"}`}
                    >
                        {descriptionButton}
                    </button>
                );
            });
        };

        return <div className="btn-group">{renderButtons()}</div>;
    }
}

export default AppFilter;
