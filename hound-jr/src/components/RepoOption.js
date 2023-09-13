const RepoOption = ({ value, selected }) => {
    return (
        <option value={value} selected={selected}>
            {value}
        </option>
    );
};

export default RepoOption;
