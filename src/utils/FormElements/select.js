import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './style.scss'

function FormSelect(props) {
    const { options, placeholder, setFieldValue, name } = props
    const [selectLabel, setSelectLabel] = useState(placeholder)
    return (

        <DropdownButton variant={'warning'} className="hema-form-dropdown-custom"  {...props}  title={selectLabel}>
            {options?.map(val => {
                return <Dropdown.Item onClick={()=>{
                    setSelectLabel(val)
                    setFieldValue(name, val)
                }} >{val}</Dropdown.Item>
            })}
        </DropdownButton>
    );
}

export default FormSelect;