import Select, { components } from 'react-select';

const DropdownIndicator = (props) => {
    const { menuIsOpen } = props.selectProps;

    return (
        <components.DropdownIndicator {...props}>
            {menuIsOpen ? (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--main-dark-text-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            ) : (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--main-dark-text-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            )}
        </components.DropdownIndicator>
    );
};

const SelectFilter = ({ name, value, options, onChange, placeholder, type }) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            position: 'relative',
            height: 44,
            minHeight: 44,
            borderRadius: 12,
            paddingLeft: 16,
            paddingRight: 32,
            width: type === 'price' ? 196 : 204,
            backgroundColor: 'var(--input-color)',
            borderColor: 'var(--input-color)',
            boxShadow: 'none',
            cursor: 'pointer',
        }),
        valueContainer: (provided) => ({
            ...provided,
            padding: 0,
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: 0,
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--main-dark-text-color)',
        }),
        menu: (provided) => ({
            ...provided,
            width: type === 'price' ? 196 : 204,
            borderRadius: 12,
            backgroundColor: 'var(--main-white)',
            border: '1px solid var(--input-color)',
            overflowY: 'visible',
            zIndex: 100,
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: type === 'price' ? 188 : 272,
            overflowY: 'auto',
            padding: 0,
            margin: 0,
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--scroll-color) transparent',
            '::-webkit-scrollbar-button': {
                display: 'none',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected || state.isFocused ? 'transparent' : 'transparent',
            color:
                state.isSelected || state.isFocused ? 'var(--main-dark-text-color)' : 'var(--placeholder-grey-color)',
            cursor: 'pointer',
            fontWeight: state.isSelected ? 600 : 400,
        }),
        placeholder: (provided) => ({
            ...provided,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.25,
            color: 'var(--main-dark-text-color)',
            padding: 0,
            margin: 0,
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'var(--main-dark-text-color)',
            fontWeight: 500,
        }),
    };

    const selectedOption = options.find((opt) => opt.value === value) || null;

    const handleChange = (selected) => {
        onChange({ target: { name, value: selected ? selected.value : '' } });
    };

    return (
        <Select
            name={name}
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            styles={customStyles}
            components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
                ClearIndicator: () => null,
            }}
            isClearable
            isSearchable={false}
        />
    );
};

export default SelectFilter;
