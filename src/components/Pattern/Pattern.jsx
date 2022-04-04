import React from 'react';

const Pattern = ({fill, id, width, height, className, ...props}) => {
    return (
            <div className={`pattern ${className}`} >
                <svg width={width} height={height}>
                    <defs>
                        <pattern id={id} x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
                            <circle fill="#FE8700" {...props}></circle>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width={width} height={height} fill={fill}></rect>
                </svg>
                <div className="circle">
                    <svg width="169" height="137" viewBox="0 0 169 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M169 0.5C169 27.4971 160.994 53.888 145.996 76.3353C130.997 98.7827 109.678 116.278 84.7363 126.61C59.7942 136.941 32.3486 139.644 5.87017 134.377C-20.6082 129.11 -44.9302 116.11 -64.0201 97.0201L32.5 0.5H169Z"
                            fill="#FFDA44"/>
                    </svg>
                </div>

            </div>
    );
};

export default Pattern;