import {React, useState} from 'react';
import * as PetService from "../api/PetService";


function AddPet({triggerParentUpdate}) {
    const emptyForm = {
        name: '',
        kind: '',
        image: '',
        profileText: ''
    }

    const [formValue, setFormValue] = useState(emptyForm)

    const clearForm = () => {
        setFormValue(emptyForm);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name: formValue.name,
            kind: formValue.kind,
            image: formValue.image,
            profileText: formValue.profileText
        };
        PetService.addPet(newPet)
            .then(() => {
                triggerParentUpdate();
                clearForm();
            });
    };

    return (<section className="tiny-dialog fader" id="petProfile">
        <div className="form-group">
            <h3>Add your pet</h3>
            <form name="addPetForm">
                <label>
                    Name:
                    <input className="form-control" name="name" type="text" value={formValue.name}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Kind:
                    <input className="form-control" name="kind" type="text" value={formValue.kind}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Picture:
                    <input className="form-control" name="image" type="text" value={formValue.image}
                           onChange={handleChange}/>
                </label>
                <br/>
                <label>
                    Profile Text:
                    <input className="form-control" name="profileText" type="text" value={formValue.profileText}
                           onChange={handleChange}/>
                </label>
                <br/>
            </form>
            <button
                className="btn btn-primary pull-right"
                form="addPetForm"
                type={"button"}
                onClick={handleSubmit}>
                Create Pet
            </button>
        </div>
    </section>)
}

export default AddPet;