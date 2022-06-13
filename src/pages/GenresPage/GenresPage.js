import {GenreCardList} from "../../components/GenreCardList/GenreCardList";

const GenresPage = () => {

    let search = () => {

    }

    return (
        <div>
            _GenresPage_
            <GenreCardList/>
            <div>
                {/*<button>reset</button>  //TODO reset chosen genres button*/}
                <button>search</button>
            </div>
            {console.log([].isEmpty)}
        </div>
    );
};

// export default GenresPage;
export {GenresPage};