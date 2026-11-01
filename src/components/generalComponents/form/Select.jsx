import Option from "./Option";

function Select({name, id, onChange, value}) {

  return (
    <>
      <div className="formGroup">

        <h4 className="faculty-glyphic-regular">Motivo de Contacto</h4>
        
        <select
          name={name}
          id={id}
          required
          onChange={onChange}
          value={value}
          className="faculty-glyphic-regular">
          

          <label for="reason">Motivo de Contacto</label>

          <Option 
          value="#"
          optionText="Seleccione una de las siguientes opciones"
          isDisabled={true}
          isSelected={true}
          />

          <Option 
          name="buisness"
          id="buisness"
          value="buisness"
          optionText="Razones comerciales"
          isDisabled={false}
          isSelected={false}
          />

          <Option 
          name="prom"
          id="prom"
          value="prom"
          optionText="Promoción"
          isDisabled={false}
          isSelected={false}
          />

          <Option
          name="problem"
          id="problem" 
          value="problem"
          optionText="Problemáticas"
          isDisabled={false}
          isSelected={false}
          />

          <Option
          name="suggest"
          id="suggest" 
          value="suggest"
          optionText="Sugerencia"
          isDisabled={false}
          isSelected={false}
          />

        </select>
      </div>
    </>
  );
}

export default Select;
