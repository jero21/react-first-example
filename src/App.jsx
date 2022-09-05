import Contador from "./components/Contador";
import Frutas from "./components/frutas";

const App = () => {
    const saludo = "Saludos desde variable";

    const classObjeto = {
        primary: "text-primary",
        danger: "text-danger"
    }
    const SaludoBienvenida = () => {
        return <h2 className="text-success"> Bienvenido</h2>
    }

    const SaludoDespedida = () => {
        return <h2 className="text-danger"> Adios</h2>
    }

    const user = true;

    const saludoClick = (nombre) => {
        console.log("Saludos!" + nombre);
    }

    const frutas = ["manzana", "pera", "platano"];

    return (
        <div className="container">
            <Contador/>
            <p className={classObjeto.primary}> {saludo}</p>
            { user ? <SaludoBienvenida /> : <SaludoDespedida /> }

            <Frutas frutasApp={frutas}/>

            <button 
                className="btn btn-primary" 
                onClick={() => saludoClick("Hola!!!!")}
            >
                Click Me
            </button>       
        </div>
    );

};

export default App;
