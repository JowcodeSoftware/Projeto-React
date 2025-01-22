// Banda nome = "U2"
// https://legacy.reactjs.org/docs/cdn-links.html?
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

function Banda(props) {
    return (
        <div className="cartao">
            <h2>{props.nome}</h2>
        </div>
    )
}

let flamework = (
    <div className="flamework">
        <Banda nome="Javascript"></Banda>
        <Banda nome="Swift"></Banda>
        <Banda nome="Python"></Banda>
        <Banda nome="Java"></Banda>
        <Banda nome="PHP"></Banda>
        <Banda nome="C#"></Banda>
        <Banda nome="React"></Banda>
        <Banda nome="SwiftUI"></Banda>
        <Banda nome="Flask"></Banda>
        <Banda nome="Hibernate"></Banda>
        <Banda nome="Laravel"></Banda>
        <Banda nome="Unity"></Banda>
    </div>
)

let root = ReactDOM.createRoot(document.getElementById('app'))
root.render(flamework)