import {React, useEffect, useState} from "react";
import {getPets} from "../api/PetService";
import AddPet from "./AddPet";
import PetInformation from './PetInformation';


function ProfileGallery() {
    const [pets, setPets] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [componentState, setComponentState] = useState({state: 'updated'});
    const [selectedPet, setSelectedPet] = useState(null);

    useEffect(() => {
        getPets().then((result) => setPets(result.data));
    }, [pets]);

    const updateState = (newState) => {
        setComponentState(newState);
    };

    function clearSelection() {
        setSelectedPet(null);
    }

    function sortName(a, b) {const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    }

    const filteredPets = pets.sort((a, b) => {return sortName(a,b)
    }).filter((pet) => pet.name.toLocaleLowerCase().includes(filterText));

    return (
        <>
            <div className="col-md-9" id="gallery">
                <div className="gallery">
                    {filteredPets.map((pet) => (

                        <div
                            className="gallery-pet fader"
                            key={filteredPets.id}
                            onClick={() => setSelectedPet(pet)}
                            aria-hidden="true"
                            role="contentinfo"
                        >
                            <img
                                src={`http://localhost:8080/${pet.image}`}
                                className="profile-picture"
                                alt="pet"
                            />
                            <div className="overlay">
                                <div className="overlay-text">{pet.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-md-3">
                <div className="gallery-detail">
                    <div>
                        <section className="tiny-dialog">
                            <h3>Find your pet</h3>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                    placeholder="Name"
                                />
                            </div>
                        </section>
                    </div>
                </div>
                <AddPet triggerParentUpdate={updateState}></AddPet>
                <PetInformation selectedPet={selectedPet} triggerParentUpdate={updateState} clearSelection={clearSelection}></PetInformation>
            </div>

        </>
    );
}

export default ProfileGallery;