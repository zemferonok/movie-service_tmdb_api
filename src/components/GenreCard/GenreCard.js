import {genreActions} from "../../redux/slices/genre.slice";
import {useDispatch} from "react-redux";

const GenreCard = ({value: {id, name}}) => {

    let dispatch = useDispatch();

    let check = (event) => {
        let checked = event.target.checked;
        console.log(name, checked);

        if (checked) {
            dispatch(genreActions.addToChosenGenres(id))
        } else {
            dispatch(genreActions.removeFromChosenGenres(id))
        }
    }

    return (
        <div>
            <label><input type="checkbox" onChange={(event) => check(event)}/>{name} - {id}</label>
        </div>
    );
};

// export default GenreCard;
export {GenreCard};