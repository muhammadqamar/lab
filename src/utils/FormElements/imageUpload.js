import React, { useRef } from "react";

const ImageUpload = (props) => {
    const openFile = useRef()
    return (
        <>
            <input ref={openFile}  type="file" {...props} className="hidden"  />
             <div onClick={()=>openFile.current.click()} className="border-solid p-[9px] font-medium text-[12px] leading-[15px] border rounded-[5px]">
                <div>Upload the image</div>
                <div> Max 2MB, Support: jpeg, jpg, png, gif</div>
            </div>
        </>
    )
}
export default ImageUpload