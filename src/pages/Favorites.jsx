import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Menu
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
             opps! seems like you havent added your favorite yet :)
            </h2>

            <p>
              please let us know your favorite from the menu.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(menu => (

                <div
                  key={menu.id}
                  className="favorite-card"
                >

                  <img
                    src={menu.image}
                    alt={menu.name}
                  />

                  <div className="favorite-content">

                    <h2>
                      {menu.name}
                    </h2>

                  

                    <p>
                      ⭐ {menu.rating}
                    </p>

                   

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(
                            menu.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favorites;