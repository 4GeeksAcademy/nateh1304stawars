const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
				},
			], 
			favorites: [],
		},
		actions: {
			toggleFavorite: (name, uid, type) => {
				const store = getStore();
				const existingFavorite = store.favorites.find(favorite => favorite.uid === uid);

				if (existingFavorite) {
					
					setStore({
						favorites: store.favorites.filter(favorite => favorite.uid !== uid)
					});
				} else {
					const newFave = { name, uid, type };
					setStore({
						favorites: [...store.favorites, newFave]
					});
				}
			},
			deleteFavorite: (name) => {
				let filteredArray = getStore().favorites.filter(
					(element) => element.name !== name
				);
				setStore({ favorites: filteredArray });
			},
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
