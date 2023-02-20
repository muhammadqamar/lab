import { FileIcon } from "../../HemeIconLibrary"

export const createNewItem = [
    {
        label: "name",
        Icon: <FileIcon />,
        type: "text",
        initialValue: "",
        placeholder: "Enter Name"


    },
    {
        label: "type",
        Icon: <FileIcon />,
        type: "select",
        required: true,
        initialValue: "",
        placeholder: "Select Item Type",
        options:['red', 'green', 'blue']
    },
    {
        label: "description",
        Icon: <FileIcon />,
        type: "textarea",
        initialValue: "",
        placeholder: "Enter Description",
        fluid:true
    },
    {
        label: "upload Image",
        Icon: <FileIcon />,
        type: "upload-image",
        initialValue: "",
        placeholder: "",
        fluid:true
    },
    {
        label: "unit type",
        Icon: <FileIcon />,
        type: "select",
        initialValue: "",
        placeholder: "Select Unit Type",
        options:['red', 'green', 'blue']
    },
    {
        label: "unit size",
        Icon: <FileIcon />,
        type: "text",
        initialValue: "",
        placeholder: "Select Unit size"
    },
    {
        label: "low Inventory alert",
        Icon: <FileIcon />,
        type: "switch",
        initialValue: false,
        placeholder: ""
    },
    {
        label: "low Inventory threshold",
        Icon: <FileIcon />,
        type: "text",
        initialValue: "",
        placeholder: "Enter low inventory threshold"
    },
]

