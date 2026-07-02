function MediaPage() {
    console.log("Media.js loaded");
    const attraction = [
        {
            title: "The Louvre",
            image: "https://cdn.oxfordshiremind.org.uk/uploads/2020/06/WFW-2-1024x682-1.jpg"
        },
        {
            title: "Notre Dame Cathedral",
            image: "https://static01.nyt.com/images/2024/11/26/multimedia/notre-dame-notebook-01-lwmv/notre-dame-notebook-01-lwmv-mobileMasterAt3x.jpg" 
        },
        {
            title:"The Eiffel Tower",
            image: "https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/1:1/w_3633,h_3633,c_limit/GettyImages-468366251.jpg" 
        },
        {
            title: "Arc de Triomphe",
            image: "https://cdn.britannica.com/28/255528-050-E63F53A7/arc-de-triumph-paris-france.jpg" 
        },
        {
            title: "Musee d'Orsay",
            image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/cf/3c/8c.jpg" 
        },
        {
            title: "Jardin du Luxembourg",
            image: "https://media.cntraveler.com/photos/5952f9ca9034d21207799151/16:9/w_2560,c_limit/jardin-du-luxembourg-GettyImages-151514883.jpg" 
        },
        {
            title: "Sainte-Chapelle",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sainte_Chapelle_Ch%C3%A2teau_Vincennes_-_Vincennes_%28FR94%29_-_2020-10-10_-_21_%28cropped%29.jpg" 
        },
        {
            title: "Paris Catacombs",
            image: "https://www.parisperfect.com/g/photos/upload/sml_1055743116-1451221585-correctsize-catacombs-hero.jpg" 
        },
        {
            title: "The Angelina",
            image: "https://res.cloudinary.com/du5jifpgg/image/upload/t_opengraph_image/Surcharge-APIDAE/Salon_de_the_Angelina_Paris.jpg" 
        }
    ];
    const music = [
        {
            title: "Taylor Swift: Red Album",
            image:"https://upload.wikimedia.org/wikipedia/en/e/e8/Taylor_Swift_-_Red.png" 
        },
        {
            title: "Weezer: Teal Album",
            image:"https://upload.wikimedia.org/wikipedia/en/1/18/Weezer_Teal_Album.jpg" 
        },
        {
            title: "K-Pop Demon Hunters Soundtrack",
            image: "https://m.media-amazon.com/images/I/81BNpr0vfKL._UF1000,1000_QL80_.jpg" 
        },
        {
            title: "Alex Warren: You'll Be Alright, Kid",
            image: "https://upload.wikimedia.org/wikipedia/en/b/b0/Alex_Warren_-_Ordinary.png" 
        },
        {
            title: "Paramore",
            image: "https://upload.wikimedia.org/wikipedia/en/e/eb/ParamoreParamore.png" 
        },
        {
            title: "Sam Hun: Montevallo",
            image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Montevallo_cover.png" 
        },
        {
            title: "Ariana Grande: The Best",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Ariana_Grande_-_The_Best.png" 
        },
        {
            title: "AJR: The Click",
            image: "https://upload.wikimedia.org/wikipedia/en/a/ae/AJR_The_Click.jpg" 
        },
        {
            title: "Backstreet Boys: Millennium",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Millennium_cover.jpg" 
        }
    ];
    const tvShow = [
        {
            title: "The Big Bang Theory: Season 1",
            image: "https://m.media-amazon.com/images/I/71qKFGIrv2L._AC_UF1000,1000_QL80_.jpg" 
        },
        {
            title: "Supernatural: Season 3",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f4/Supernatural_Season_3.jpg" 
        },
        {
            title: "DanDaDan",
            image: "https://m.media-amazon.com/images/M/MV5BYWFhOWMxNTYtZThiMi00ZmQ5LTlmODktN2QwNzUyZjMyZGQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
        },
        {
            title:"Chainsaw Man",
            image:"https://m.media-amazon.com/images/I/81Oik5rQxHL._AC_UF894,1000_QL80_.jpg" 
        },
        {
            title: "Rick and Morty: Season 2",
            image: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" 
        },
        {
            title: "Brooklyn 99: Season 4",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Brooklyn_Nine-Nine_Season_4.jpg/250px-Brooklyn_Nine-Nine_Season_4.jpg"
        },
        {
            title: "New Girl: Season 7",
            image: "https://upload.wikimedia.org/wikipedia/en/8/8d/New_Girl_season_7.png" 
        },
        {
            title: "Scrubs: Season 5",
            image: "https://upload.wikimedia.org/wikipedia/en/1/14/Scrubs-s5-dvd.jpg"
        },
        {
            title: "South Park: Season 6",
            image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7893371_b_v8_ac.jpg" 
        },
        {
            title: "Friends: Season 1",
            image: "https://image.tmdb.org/t/p/original/odCW88Cq5hAF0ZFVOkeJmeQv1nV.jpg" 
        }
    ];
    const movies = [
        {
            title: "Finding Nemo",
            image: "https://i.etsystatic.com/17257718/r/il/7140d0/4453457092/il_fullxfull.4453457092_8brk.jpg"
        },
        {
            title: "Cars",
            image: "https://m.media-amazon.com/images/I/91luiNf2JbL._AC_UF894,1000_QL80_.jpg"
        },
        {
            title: "Star Wars: Revenge of the Sith",
            image: "https://theflucobeat.com/wp-content/uploads/2023/04/l22BwYse8SmCgIeoBJ81vZ5k2As7uiX2L4IZzTCG.jpg" 
        },
        {
            title: "Lord of the Rings: Fellowship of the Ring",
            image: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg" 
        },
        {
            title: "Avengers: End Game",
            image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg" 
        },
        {
            title: "Forrest Gump",
            image:"https://ebertfest.com/sites/default/files/s-l1600.jpg"
        },
        {
            title:"Interstellar",
            image:"https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg" 
        },
        {
            title: "Back to the Future",
            image:"https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_.jpg"
        },
        {
            title: "Men in Black",
            image: "https://m.media-amazon.com/images/I/7118Bwesb5L._AC_UF1000,1000_QL80_.jpg"
        },
        {
            title:"The Lion King",
            image:"https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg"
        }
    ];

    const [favorites, setFavorites] = React.useState([]);
    
    function addFavorite(movie) {
        // Don't add duplicates
        if (favorites.some(f => f.title === movie.title))
            return;
        setFavorites([...favorites, movie]);
    }

    function removeFavorite(movieTitle) {
        setFavorites(
            favorites.filter(movie => movie.title !== movieTitle)
        );
    }

    return (
        <div className="mediaPage">
            {/* Top Bar */}
            <div>{showTopBar()}</div>
            <div className="media-content">
                {/* Left Column */}
                <div className="left-column">
                    <div className="bookmark-box">
                        <h3>Favorites</h3>
                        <div id="favorites-list">
                            {favorites.map(movie => (
                                <div key={movie.title} className="favorite-item">
                                    <img src={movie.image} alt={movie.title}/>
                                    <span className="favorite-title"> {movie.title}</span>
                                    <button className="remove-btn" onClick={() => removeFavorite(movie.title)}> ✕</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="recommendation-box">
                        <h3>Recommendations</h3>
                    </div>
                </div>
                {/* Right Column */}
                <div className="right-column">
                    <div className="media-box">
                        <h2>Movies</h2>
                        <div className="scroll-row">
                            {movies.map(movie => (<div key={movie.title} className="card">
                                    <h3 className="card-title"> {movie.title}</h3>
                                    <img src={movie.image} alt={movie.title}/>
                                    <button className="favorite-btn" onClick={() => addFavorite(movie)}>❤️ Favorite</button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="media-box">
                        <h2>TV Shows</h2>
                        <div className="scroll-row">
                            {tvShow.map(tvShow => (<div key={tvShow.title} className="card">
                                    <h3 className="card-title"> {tvShow.title}</h3>
                                    <img src={tvShow.image} alt={tvShow.title}/>
                                    <button className="favorite-btn" onClick={() => addFavorite(tvShow)}>❤️ Favorite</button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="media-box">
                        <h2>Music</h2>
                        <div className="scroll-row">
                            {music.map(music => (<div key={music.title} className="music-card">
                                    <h3 className="card-title"> {music.title}</h3>
                                    <img src={music.image} alt={music.title}/>
                                    <button className="favorite-btn" onClick={() => addFavorite(music)}>❤️ Favorite</button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="media-box">
                        <h2>Attractions</h2>
                        <div className="scroll-row">
                            {attraction.map(attraction => (<div key={attraction.title} className="music-card">
                                    <h3 className="card-title"> {attraction.title}</h3>
                                    <img src={attraction.image} alt={attraction.title}/>
                                    <button className="favorite-btn" onClick={() => addFavorite(attraction)}>❤️ Favorite</button>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}