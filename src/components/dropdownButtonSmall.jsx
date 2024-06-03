import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const DropDownButtonSmall = ({ editar, eliminar }) => {
    //TODO: AÑADIR OPCION DE USUARIOS
    var acciones = {
        //1: "Ver",
        2: "Editar",
        3: "Eliminar",
    }
    const handleItemClick = (eventKey) => {

        switch (acciones[eventKey]) {
            /*           case acciones[1]:
                          ver();
                          break; */

            case acciones[2]:
                editar();
                break;

            case acciones[3]:
                eliminar();
                break;

            default:
                console.log('ddbs default');
                break;
        }
    };
    return (

        <>
            {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    variant="secondary"
                    title="Acciones"
                >

                    {Object.entries(acciones).map(([key, value]) => (
                        <Dropdown.Item key={key} eventKey={key} onClick={() => handleItemClick(key)}>
                            {value}
                        </Dropdown.Item>
                    ))}
                </DropdownType>
            ))}
        </>

    );
}

export default DropDownButtonSmall;