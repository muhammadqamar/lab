import React from "react";
const Button = (props) => {
    const { text, Icon, color, bg, cta } = props;

    return (
        <button
            onClick={() => {
                cta()
            }}
            className={`flex w-fit items-center bg-${bg} text-${color} gap-[8px] rounded-[5px] ${text ? 'py-[11px] px-[20px]' : 'p-[8px]'} text-[14px] leading-[17px] font-medium`}>
            {Icon}
            {text}
        </button>
    )

}
export default Button