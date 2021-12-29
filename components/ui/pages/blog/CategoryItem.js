import React from 'react';
import {ArrowForwardIos} from "@mui/icons-material";

function CategoryItem(props) {
    const {title} = props;
    return (
        <div className="py-3 border-b border-gray-400">
            <div className="flex items-center cursor-pointer">
                <ArrowForwardIos className="text-gray-400" fontSize="small"/>
                <p className="text-gray-500 text-lg px-2">
                    {title}
                </p>
            </div>
        </div>
    );
}

export default CategoryItem;