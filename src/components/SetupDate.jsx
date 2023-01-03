import {React} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {incrementPopularity} from "../api/PetService";
import Pet from "../model/Pet";


function SetupDate() {

    const location = useLocation();
    const {selectedPet} = location.state.selectedPet;
    const navigate = useNavigate();

    const onSubmitPlay = (event) => {
        event.preventDefault();
        incrementPopularity(selectedPet.name).then(navigate("/"));
    };

    function handleCancel() {
        navigate("/");
    }


    return (
        <div className="container modalPopup">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="big-dialog">
                        <div className="clearfix">
                            <div className="pull-left dialog-picture">
                                <img
                                    src={`https://pettinder.herokuapp.com/${selectedPet.image}`}
                                    className="profile-picture"
                                    alt="pet"
                                />
                            </div>
                            <h3>{selectedPet.name}</h3>
                            <p>{selectedPet.profileText}</p>
                        </div>
                        <br />
                        <div className="clearfix">
                            <form onSubmit={onSubmitPlay}>
                                <Link to="/">
                                    <button className="btn btn-primary pull-right" type="button">Cancel</button>
                                </Link>
                                <button className="btn btn-primary pull-right" type="submit">Let us Play</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
SetupDate.propTypes = Pet;

export default SetupDate;