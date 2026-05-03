export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    character: [],
    planets: [],
    vehicles: [],
    favoritos: [],
    saludo: "Hola desde Store",
    contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


////////////////////////////////////////////////////
    case 'set_personajes':
      const { personaje } = action.payload;
      return {
        ...store,
        character: personaje
      };

    case 'set_planets':
      const { planets } = action.payload;
      return {
        ...store,
        planets: planets
      };

    case 'set_vehicles':
      const { vehicles } = action.payload;
      return {
        ...store,
        vehicles: vehicles
      };

    case 'add_favorite':
        // Handle names that might be in action.payload.name OR action.payload.properties.name
        const newName = action.payload.name || action.payload.properties?.name;
        
        // Check if it already exists using the same logic
        const alreadyExists = store.favoritos.find(fav => {
            const favName = fav.name || fav.properties?.name;
            return favName === newName;
        });

        if (alreadyExists) return store;

        return {
            ...store,
            favoritos: [...store.favoritos, action.payload]
        };

    case 'delete_favorite':
        const nameToDelete = action.payload.name || action.payload.properties?.name;
        return {
            ...store,
            favoritos: store.favoritos.filter(item => {
                const itemName = item.name || item.properties?.name;
                return itemName !== nameToDelete;
            })
        };

    //////////////////////////////////
    case "change_saludo":
      const { message } = action.payload
      return {
        // ...store, saludo : "saludo desde el dispatch!"
        ...store, saludo: message
      }
    ////////////////////////////////////
    case "add_contact":
      return{
        ...store, contacts: [...store.contacts, action.payload]
      }

    /////////////////////////////////






    default:
      throw Error('Unknown action.');
  }    
}
