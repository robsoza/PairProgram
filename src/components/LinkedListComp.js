import React, { useState, useEffect } from 'react';
import func from '../business/LinkedListFunc';
import FormComp from './FormComp';
import { ThemeContext } from './ThemeContextComp';

function LinkedListComp() {

    const [ctrl] = useState(new func.LinkedList());
    const [node, setNode] = useState();
    const [total, setTotal] = useState(0);
    const [message, setMessage] = useState({ text: "", class: "" });

    useEffect(() => {
        // This effect will run any time a state variable changes
        console.log('----useEffect: general');
    });

    useEffect(() => {
        function fetchData() {
            try {
                userMsg("LinkedList", "status");
            } catch (e) {
                userMsg("***** Error*****", "error");
            }
        }
        fetchData();
    }, []);

    function userMsg(msg, type) {
        // set the class based on the type of message
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function save(node) {
        ctrl.insert(node.subject, node.amount);
        setNode(ctrl.show());
        setTotal(ctrl.total());
    }

    function click(e) {
        if (ctrl.currentNode) {
            if (e === "First") {
                ctrl.first()
                setNode(ctrl.show())
            }

            if (e === "Previous") {
                ctrl.previous()
                setNode(ctrl.show())
            }

            if (e === "Next") {
                ctrl.next()
                setNode(ctrl.show())
            }

            if (e === "Last") {
                ctrl.last()
                setNode(ctrl.show())
            }

            //delete
            else if (e === "Delete") {
                ctrl.delete();
                if (!ctrl.currentNode) {
                    setNode("empty list");
                } else {
                    setNode(ctrl.show())
                }
                setTotal(ctrl.total());
            }
        }
    }

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div style={{ backgroundColor: theme.background }}>
                    <FormComp onClick={click} onSave={save} userMsg={userMsg} node={node} total={total} />
                    <div className={message.class}>{message.text}</div>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default LinkedListComp; 