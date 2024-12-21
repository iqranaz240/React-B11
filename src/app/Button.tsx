"use client"; //for next-app

export default function Button(props: any) {
    // const buttonName: string = 'Hello';
    const buttonStyle = {
        backgroundColor: props.color,
        color: 'white'
    };
    const handleClick = () => {
        alert('Hello Button!!');
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {props.name}
        </button>
    );
}
