import React from 'react';

function FifoLifoComp(props) {

    return (
        <div>
            <h1>My Queue & Stack</h1>
            <div className='fifo-lifo'>

                <div>
                    <label>EnQueue & Put In:</label><br />
                    <button onClick={props.onSave}>EnQueue / Put In</button><br />


                    <label>DeQueue & Put Out:</label><br />
                    <button onClick={props.onDelete}>DeQueue / Put Out</button>
                </div>



                <h3>FIFO Queue:</h3>
                <textarea value={props.queue} placeholder='queue...' ></textarea><br />



                <h3>LIFO Stack:</h3>
                <textarea value={props.stack} placeholder='stack...' ></textarea>

            </div>
        </div>
    )
}

export default FifoLifoComp;