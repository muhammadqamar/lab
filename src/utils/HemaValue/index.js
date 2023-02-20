import React from "react";

const HemaValue = (props) => {
    const { text, bg, color = "black-100" } = props;

    return (
        <p className={`text-[14px] w-fit leading-[21px] font-medium text-${color} bg-${bg}  ${bg && 'px-[8px] rounded-[90px]'}`}>
            {text}
        </p>
    )

}
export default HemaValue