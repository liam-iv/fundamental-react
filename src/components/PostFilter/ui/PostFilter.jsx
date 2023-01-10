import React from 'react';
import MyInput from "../../UI/input/MyInput";
import {MySelect} from "../../UI/select/MySelect";

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                defaultName='Сортировка:'
                onChange={ selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'description', name: 'По описанию'},
                ]}

            />
        </div>
    );
}

