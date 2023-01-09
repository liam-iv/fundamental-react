import React from 'react';

export const MySelect = ({options, defaultName, value, onChange}) => {
    return (
            <select
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled={true} value=''>{defaultName}</option>
                {options.map((option, index) =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
    );
};
