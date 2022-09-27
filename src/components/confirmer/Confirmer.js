import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './confirmer.scss';
import rocket from '../../resourses/topbar/rocket-icon.svg';


const Confirmer = (props) => {

    const { confirmerVisibility, setConfirmerVisibility } = props;
    const navigate = useNavigate();


    return (
        <>
            <div
                onClick={() => {
                    navigate('/checkout')
                }}
                className={confirmerVisibility ? "confirm" : "confirm confirm_hidden"}>
                <div
                    className="confirm-button">
                    <div className={"button-text"}>замовити 4 позиції</div>
                    <div className="rocket-icon">
                        <img src={rocket} alt="rocket" />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Confirmer;