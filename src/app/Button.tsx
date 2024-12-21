"use client"; //for next-app

export default function Button() {
    const buttonName: string = 'Hello';
    const buttonStyle = {
        backgroundColor: 'red',
        color: 'white'
    };
    const handleClick = () => {
        alert('Hello Button!!');
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {buttonName}
        </button>
    );
}
