import React, { useState } from "react";
import Switch from "react-switch";

const FormSwitch = (props) => {
    const  {setFieldValue, name, initialValue} = props
    const [checked, setChecked] = useState(initialValue)
    return (
        <Switch onChange={(e) => {

            setFieldValue(name,e)
            setChecked(e)
        }} checked={checked} />

    );

}
export default FormSwitch;