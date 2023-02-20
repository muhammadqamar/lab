import React from "react";

const HemaHeadingWithSubText = (props) => {
    const { heading, sub } = props;

    return (
        <>
            {heading && <h1 className="font-bold text-[30px] leading-[38px] text-mainheadingColor m-0 ">{heading}</h1>}
            {sub && <p className="pt-[4px]  text-[16px] leading-[24px] text-textColor">{sub}</p>}
        </>
    )

}
export default HemaHeadingWithSubText