import React from "react";
import ShowFormBtn from "./ShowFormBtn";
const Header = ({ showBtn, setShowBtn }) => {
    return (
        <div className="header">
            <h2>Task Tracker ✏️</h2>
            <button onClick={() => setShowBtn(!showBtn)} className="add_btn">
                {showBtn ? 'Eklemeyi Kapat' : 'Eklemeyi Aç'}
            </button>
        </div>
    );
};

export default Header;
