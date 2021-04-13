import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="switch">
      <Switch
        className="transform"
        checked={state.checkedA}
        onChange={handleChange}
        color="primary"
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}

