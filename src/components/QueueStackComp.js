import React, { useState, useEffect } from 'react';
import func from '../business/FifoLifoFunc';
import FifoLifoComp from './FifoLifoComp';
import { ThemeContext } from './ThemeContextComp';

function QueueStackComp() {

    const [fifo, setFifo] = useState();
    const [lifo, setLifo] = useState();
    const [fifoNode, setFifoNode] = useState(1);
    const [lifoNode, setLifoNode] = useState(1);
    const [message, setMessage] = useState({ text: "", class: "" });
    const [queueCtrl] = useState(new func.FifoQueue());
    const [stackCtrl] = useState(new func.LifoStack());

    useEffect(() => {
        // This effect will run any time a state variable changes
        console.log('----useEffect: general');
    });

    useEffect(() => {
        function fetchData() {
            try {
                userMsg("Queue & Stack", "status");
            } catch (e) {
                userMsg("***** Error*****", "error");
            }
        }
        fetchData();
    }, []);

    function userMsg(msg, type) {
        const cls = (type) ? 'cl' + type : 'clstatus';
        setMessage({ text: msg, class: cls });
    }

    function onSave() {
        setFifoNode(fifoNode + 1);
        queueCtrl.enqueue(fifoNode);
        userMsg("added " + fifoNode, "status");
        setFifo(queueCtrl.show());

        setLifoNode(lifoNode + 1);
        stackCtrl.putIn(lifoNode)
        setLifo(stackCtrl.show());
    }

    function onDelete() {
        let qArr = queueCtrl.show();
        let sArr = stackCtrl.show();
        let first = qArr[0];
        let last = sArr[0];

        if (queueCtrl.show() !== 'Empty Queue') {
            userMsg("deleted Fifo:  " + first + "Lifo:  " + last);
        } else {
            userMsg();
        }

        queueCtrl.dequeue();
        setFifo(queueCtrl.show());

        stackCtrl.takeOut();
        setLifo(stackCtrl.show());
    }

    return (
        <ThemeContext.Consumer>
            {({ theme }) => (
                <div style={{ backgroundColor: theme.background }}>
                    <FifoLifoComp
                        queue={fifo} stack={lifo} onSave={onSave}
                        onDelete={onDelete} userMsg={userMsg} />
                    <label className={message.class}>{message.text}</label>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}

export default QueueStackComp; 