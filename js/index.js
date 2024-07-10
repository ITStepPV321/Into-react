function UserInfo() {
    return (
        <>
            <h1>UserCard</h1>
            <h3>Name - SecondName : <span className="highlight"> Arseniy Melnychuk </span></h3>
            <h3>Phone number : <span className="highlight"> +380663605916 </span></h3>
            <h3>Gmail adress : <span className="highlight"> arsen2008melnychuk@gmail.com </span></h3>
        </>
    );
}

function NativeCity() {
    return (
        <>
        <h1>NativeCity</h1>
    <h3>Name City : <span className="highlight"> Rivne </span></h3>
    <h3>Name Country: <span className="highlight"> Ukraine </span></h3>
    <h3>Year of foundation : <span className="highlight"> 1283 </span></h3>
        </>
    );
}

function App() {
    return (
        <>
            <UserInfo />
            <NativeCity />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))
