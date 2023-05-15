export default function SearchBar(props) {
   return (
      <div>
         <input
            type="search"
            name="search"
            id="search"
         />
         <button onClick={() => props.onSearch("characterID")}>
            Agregar
         </button>
      </div>
   );
}
