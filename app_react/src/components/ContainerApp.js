import React from 'react';

export const ContainerApp = (props) => {
    return(
        <main>
            <div className="container">
                <div className="row">
                    {props.children}
                </div>
            </div>
        </main>
    );
    // {props.children} -> meio da tag -> <ContainerApp>Outras tags/Variaveis</ContainerApp>
}