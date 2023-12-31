import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if (newValue.length < 1) return; //evitar enviar campo vacio

    // onAddCategory(Array.from(new Set([...categorias, inputValue])));
    onNewCategory(newValue);

    setInputValue("");
  };

  return (
    <form action="" onSubmit={onSubmit} className="form__group field">
      {/* <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      /> */}

      <input
        type="text"
        className="form__field"
        placeholder="Buscar Gifs"
        name="name"
        id="name"
        required
        value={inputValue}
        onChange={onInputChange}
      />
      {/* <label for="name" className="form__label">
        Buscar
      </label> */}
    </form>
  );
};
