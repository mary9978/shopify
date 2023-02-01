const Input = ({label,name,formik,type="text"}) => {
    return (
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          {...formik.getFieldProps(name)}
          name={name}
        />
        {formik.errors[name] && formik.touched[name] && (
          <div className="error">{formik.errors[name]}</div>
        )}
      </div>
    );
}
 
export default Input;