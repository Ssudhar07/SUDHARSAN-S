import "./AddFilter.css";
const AddFilter = (props) => {

    const AddingFilter = (event) => {
        props.onfilterYear(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <lable>Filter</lable>
                <select value={props.SelectedYear} onChange={AddingFilter} >
                    <option value="2021">2021</option >
                    <option value="2020">2020</option >
                    <option value="2019">2019</option >
                </select>
            </div>
        </div>
    );
}
export default AddFilter;