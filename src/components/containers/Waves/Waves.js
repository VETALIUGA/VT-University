import React from 'react';
import './Waves.scss';

function Waves() {
    return (
        <div class="waves__wrap">
            <svg class="wave_bot" xmlns="http://www.w3.org/2000/svg" width="2349px" height="99px">
                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M-0.000,78.000 L33.814,23.667 C33.814,23.667 232.602,-20.500 795.827,42.369 C1359.051,105.238 1542.886,-44.042 1949.732,14.316 C2449.269,85.969 2338.000,81.000 2338.000,81.000 C2304.871,122.320 -0.000,78.000 -0.000,78.000 Z"></path>
            </svg>
            <svg class="wave_mid" xmlns="http://www.w3.org/2000/svg" width="2475px" height="130px">
                <path fill-rule="evenodd" opacity="0.149" fill="rgb(255, 255, 255)" d="M0.689,87.667 C0.689,87.667 354.425,-54.805 915.105,33.898 C1475.784,122.600 1884.444,-82.968 2308.500,40.911 C2374.678,60.244 2424.641,80.958 2464.156,96.758 C2660.935,175.438 0.689,87.667 0.689,87.667 Z"></path>
            </svg>
            <svg class="wave_top" xmlns="http://www.w3.org/2000/svg" width="2791px" height="156px">
                <path fill-rule="evenodd" opacity="0.149" fill="rgb(255, 255, 255)" d="M242.299,87.667 C242.299,87.667 596.036,-54.805 1156.715,33.898 C1717.394,122.600 2126.054,-82.968 2550.110,40.911 C2974.166,164.790 2707.000,101.000 2707.000,101.000 L0.000,156.000 L242.299,87.667 Z"></path>
            </svg>
        </div>
    );
}

export default Waves;
