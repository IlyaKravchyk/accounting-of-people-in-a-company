import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
import {Component} from "react";
import {getLocalStorage, setLocalStorage} from "../../helpers/localStorage";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = getLocalStorage() || {
            data: [
                {name: "John C.", salary: 800, increase: false, rise: true, id: 1},
                {name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2},
                {name: "Dana J.", salary: 4000, increase: false, rise: false, id: 3},
            ],
            searchName: "",
            filterGroup: "all",
        };
    }

    onSetFilterGroup = (groupName) => {
        this.setState((state) => ({...state, filterGroup: groupName}));
    };

    onSetSearchName = (value) => {
        this.setState({searchName: value});
    };

    onSearchPeople = (searchText, stateData) => {
        const filterGroup = this.state.filterGroup;

        if (searchText.length <= 0) {
            if (filterGroup === "all") {
                return this.state.data;
            } else if (filterGroup === "rise") {
                return this.state.data.filter(({rise}) => rise);
            } else if (filterGroup === "salary") {
                return this.state.data.filter(({salary}) => salary > 1000);
            }
        }

        return stateData.filter(({name}) => name.toLowerCase().search(searchText.toLowerCase()) !== -1);
    };

    onAddPeople = (newPeople) => {
        this.setState(
            ({data}) => ({data: [...data, newPeople]}),
            () => setLocalStorage(this.state),
        );
    };

    onToggleIncrease = (id) => {
        this.setState(
            ({data}) => ({
                data: data.map((item) => {
                    if (item.id === id) {
                        return {...item, increase: !item.increase};
                    }
                    return item;
                }),
            }),
            () => setLocalStorage(this.state),
        );
    };

    onToggleRise = (id) => {
        this.setState(
            ({data}) => ({
                data: data.map((item) => {
                    if (item.id === id) {
                        return {...item, rise: !item.rise};
                    }
                    return item;
                }),
            }),
            () => setLocalStorage(this.state),
        );
    };

    onDeletedPeople = (id) => {
        this.setState(
            ({data}) => ({
                data: data.filter((item) => item.id !== id),
            }),
            () => setLocalStorage(this.state),
        );
    };

    render() {
        const peopleCount = this.state.data.length;
        const increaseCount = this.state.data.filter((item) => item.increase).length;
        const {filterGroup} = this.state;
        const visibleData = this.onSearchPeople(this.state.searchName, this.state.data);

        return (
            <div className="app">
                <AppInfo peopleCount={peopleCount} increaseCount={increaseCount} />

                <div className="search-panel">
                    <SearchPanel onSetSearchName={this.onSetSearchName} />
                    <AppFilter onSetFilterGroup={this.onSetFilterGroup} filterGroup={filterGroup} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    onDeletedPeople={this.onDeletedPeople}
                />
                <EmployeesAddForm onAddPeople={this.onAddPeople} />
            </div>
        );
    }
}

export default App;
