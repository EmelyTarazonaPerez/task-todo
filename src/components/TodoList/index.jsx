import React from "react";
import './TodoList.css'

function TodoList(props) {
    return (
        <div className="row">
            <section className="col-sm-12 col-xs-5 col-md-11 col-lg-11 contenedor_list">
                <div>{props.children}</div>
            </section>
        </div>

    );
};

export { TodoList };