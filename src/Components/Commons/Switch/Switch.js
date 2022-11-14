import Container from "../../Helpers/Container/Container";
import style from "./Switch.module.scss"; 

const Switch = props => {
    return (
        <Container className={style.switchContainer}>
            <form className={style.form}>
            <input type="checkbox" id="switch" onClick={props.onSwitchTheme} defaultChecked={props.isChecked}/>
            <label htmlFor="switch"></label>
            </form>
        </Container>
    )
}

export default Switch;