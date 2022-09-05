import React from "react";

const Frutas = (props) => {
    return (
        <>
            <ul>
                {
                    props.frutasApp.map((fruta, index) => (
                        <li key={index}>{index + 1} - {fruta}</li>
                    ))
                }
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ut, ea officiis? Voluptate, quos explicabo exercitationem aliquam nesciunt ipsum magnam sapiente, 
            voluptatem, molestias saepe eaque quaerat aperiam natus. 
            Accusantium, modi id?</p>
        </>
        
    )
}

export default Frutas