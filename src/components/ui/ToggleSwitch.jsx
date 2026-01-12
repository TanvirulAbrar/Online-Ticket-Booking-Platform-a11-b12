const ToggleSwitch = ({ 
  checked = false, 
  onChange, 
  id, 
  className = '',
  theme = 'default' // 'default', 'light', 'dark'
}) => {
  return (
    <div className={`toggle-switch ${theme} ${className}`}>
      <input 
        className="toggle-input" 
        id={id} 
        type="checkbox" 
        checked={checked}
        onChange={onChange}
      />
      <label className="toggle-label" htmlFor={id}></label>
    </div>
  );
};

export default ToggleSwitch;