import "./employees-add-form.css";
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            errorName: true,
            errorTextName: "",
            errorSalary: true,
            errorTextSalary: "",
        };
    }

    validateName = (validatesData) => {
        const templateName = /^[a-zA-Zа-яА-Я_-]+$/;
        if (validatesData.trim().length < 3) {
            return this.setState({errorName: false, errorTextName: "Количество символов должно быть больше 3"});
        } else if (!templateName.test(validatesData)) {
            return this.setState({errorName: false, errorTextName: "Неправильное имя"});
        } else {
            return this.setState({errorName: true, errorTextName: ""});
        }
    };
    validateSalary = (validatesData) => {
        const templateSalary = /^[1-9]\d*$/;

        if (validatesData[0] === "0") {
            return this.setState({errorSalary: false, errorTextSalary: "Первое число не может быть равно 0"});
        } else if (!templateSalary.test(validatesData)) {
            return this.setState({errorSalary: false, errorTextSalary: "Введите число"});
        } else if (validatesData.trim().length < 3 || validatesData < 500) {
            return this.setState({errorSalary: false, errorTextSalary: "Ваш сотрудник умрёт с голода"});
        } else {
            return this.setState({errorSalary: true, errorTextSalary: ""});
        }
    };

    onValueChange = (e) => {
        const inputField = e.target.name;
        const value = e.target.value;

        this.setState({
            [inputField]: value,
        });

        if (inputField === "name") {
            this.validateName(value);
        } else {
            this.validateSalary(value);
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        if (!this.state.errorName || !this.state.errorSalary || !this.state.name || !this.state.salary) return;

        const newPeople = {
            ...this.state,
            increase: false,
            rise: false,
            id: Date.now(),
        };

        this.props.onAddPeople(newPeople);

        this.setState({
            name: "",
            salary: 0,
        });
    };

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.submitHandler}>
                    <div className="add-form-input-wrapper">
                        <input
                            onChange={this.onValueChange}
                            type="text"
                            className="form-control new-post-label"
                            placeholder="Имя?"
                            name="name"
                            value={name}
                        />
                        {!this.state.errorName && <p className="app-add-form-error">{this.state.errorTextName}</p>}
                    </div>
                    <div className="add-form-input-wrapper">
                        <input
                            onChange={this.onValueChange}
                            type="text"
                            className="form-control new-post-label"
                            placeholder="З/П в $?"
                            name="salary"
                            value={salary}
                        />
                        {!this.state.errorSalary && <p className="app-add-form-error">{this.state.errorTextSalary}</p>}
                    </div>

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
