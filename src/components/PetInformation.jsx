import {React} from 'react';
import {deletePet} from "../api/PetService";
import {Link} from "react-router-dom";




function PetInformation({triggerParentUpdate, selectedPet, clearSelection}) {

    function handleDelete() {
        deletePet(selectedPet)
            .then(() => {
                triggerParentUpdate();
                clearSelection();
            });
    }

    return (
        <>
            {selectedPet
                && (
                    <div className="gallery-detail">
                        <section className="tiny-dialog fader" id="petProfile">
                            <h3>{selectedPet.name}</h3>
                            <p>{selectedPet.profileText}</p>
                            <p>
                                Popularity:
                                {' '}
                                {selectedPet.popularity}
                            </p>
                            <button
                                className="btn btn-primary pull-right"
                                onClick={handleDelete}
                                type="button">
                                Delete Pet
                            </button>
                            <Link
                                to="/date"
                                state={{ selectedPet: { selectedPet } }}
                            >
                                <button className="btn btn-primary pull-right" type="button">Setup Date</button>
                            </Link>
                        </section>
                    </div>)}

        </>
    );
}

export default PetInformation;