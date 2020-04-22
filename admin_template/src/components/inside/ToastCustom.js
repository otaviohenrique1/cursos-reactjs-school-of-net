import React from "react";
import { DefaultToast } from "react-toast-notifications";

const CustomDefaultToast = ({ appearance, children }) => (
    <div style={{ background: `${appearance}` }}>
        <h1>
            {children}
        </h1>
    </div>
);

const CustomDefaultToast2 = ({ children, ...props }) => (
    <DefaultToast {...props}>
        <div>
            <h1>
                {children}
            </h1>
        </div>
    </DefaultToast>
);

export default {
    CustomDefaultToast,
    CustomDefaultToast2
};