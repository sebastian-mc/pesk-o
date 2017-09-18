/**
 * Created by Lady Pinzon on 17/09/2017.
 */
import React, {Component} from 'react';


class CityChooser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departamento: "",
            ciudad: ""
        }
    }
    render(){
        const options = ["apple", "mango", "grapes", "melon", "strawberry"];

        return (                        <div className="form-group">
            <select
                name='Departamento'
                value='Cundinamarca'
                onChange={(event)=>{console.log(event.target.value)}}
                className="form-select">
                <option value="">Seleccione departamento</option>
                {options.map(opt => {
                    return (
                        <option
                            key={opt}
                            value={opt}>{opt}</option>
                    );
                })}
            </select>
        </div>)}
}
export default CityChooser;