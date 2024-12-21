import Button from "./Button";
export default function Header(props: any) {

    console.log(props)
    return (
        <div>
            <Button name={props.name} color={props.color}/>
            <Button name="ABC Button" color='green'/>
            <Button name="HKJHIHD" color='blue'/>
        </div>
    );
}
