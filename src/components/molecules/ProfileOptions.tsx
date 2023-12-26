import React, { useEffect, useRef, useState } from 'react';

const ProfileOptions = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!showDropdown) return;
        function handleClick(e: any) {
            if (dropdown.current && !dropdown.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    });

    return (
        <div className="main-black relative">
            <div
                className="w-10 h-10 sm:h-8 sm:w-8 flex justify-between items-center rounded-full ml-4 cursor-pointer"
                style={{
                    backgroundImage: `url("/avatar.svg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                onClick={() => setShowDropdown(!showDropdown)}
            ></div>
            {showDropdown ? (
                <div
                    className="dropdown-select absolute w-48 mt-6 z-20 right-0 left-auto rounded sub-text"
                    ref={dropdown}
                >
                    <a
                        className="my-1 px-5 p-2 cursor-pointer link-black-hover block"
                        href="/me"
                    >
                        View Profile
                    </a>
                    <a
                        className="my-1 px-5 p-2 cursor-pointer link-black-hover block"
                        href="/logout"
                    >
                        Sign out
                    </a>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default ProfileOptions; 