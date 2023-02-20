import React from "react";
import {Caret} from "../../HemeIconLibrary/caret"
const HemaLabel = (props)=>{
    const {text, showCaret, required, Icon, color="black", className } = props;

    return (
        <label className={`flex gap-[4px] items-center ${className} capitalize`}>
            {Icon}
            <span className={`text-[12px] leading-[18px] font-medium text-[${color}]`}>{text}</span>
            {showCaret && <Caret />}
            {required && <span className="text-red leading-[0]">*</span>}
        </label>
    )

}
export default HemaLabel