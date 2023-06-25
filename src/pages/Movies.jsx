import { useState } from "react";
import MoviesList from "../components/MoviesList"

export const Movies = () => {
    const [searchName, setSearchName] = useState("");

    const handleSubmitSearchMovie = evt => {
        evt.preventDefault();
        const firstValue = evt.currentTarget.elements.name.value;
        if (firstValue.trim() === '') {
            evt.currentTarget.reset();
            return;
        }
         
        setSearchName(firstValue.trim());
        evt.currentTarget.reset();
    };
    
    
    return (
        <div>
            <form onSubmit={handleSubmitSearchMovie}>
                <input
                    type="text"
                    name="name"
                    placeholder="enter a movie title"
                    autoComplete="off"
                    autoFocus />
                <button type="submit">Search</button>
            </form>
            <MoviesList searchName={searchName} />
        </div>
    );
};