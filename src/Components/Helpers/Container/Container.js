const Container = props => {
    return <div className={props.className} theme={props.theme}>{props.children}</div>
}

export default Container