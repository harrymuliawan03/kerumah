import React from 'react';

interface Props {
    children: React.ReactNode;
}

const WrapperDashboard: React.FC<Props> = (props) => {
    return (
        <div className="bg-gray-300">
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default WrapperDashboard;