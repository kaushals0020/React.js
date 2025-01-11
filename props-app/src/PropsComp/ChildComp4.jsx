export default function ChildComp4(props) {
    return (
        <>
            <h2>Component 4</h2>
            {props.allStudent.map((stud)=>(
                <p>{stud.roll}-{stud.sName}-{stud.per}</p>
                ))}
        </>
    );
}



