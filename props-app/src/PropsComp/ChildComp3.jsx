export default function ChildComp3(props){
    return<>
    <h1>
        Child Component 3
        Parent Data = {props.employee.id}-{props.employee.ename}-{props.employee.salary}
    </h1>
    </>
}