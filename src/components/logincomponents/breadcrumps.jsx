import React from "react";

const Breadcrumps = (b1, b2, link) => {
    return (
        <nav aria-label="breadcrumb">
            <ol class="flex items-center gap-2">
                <li class="">
                    <a className="text-[#C40C34]" href={link}>
                        {b1}
                    </a>
                </li>
                <li>
                    <img src="Icon.png" alt="" />
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    {b2}
                </li>
            </ol>
        </nav>
    );
};
export default Breadcrumps;
