import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Role Type</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel name="superadmin" value="superadmin" control={<Radio />} label="Super Admin" />
                <FormControlLabel name="admin" value="admin" control={<Radio />} label="Admin" />
                <FormControlLabel name="minter" value="minter" control={<Radio />} label="Minter" />
                <FormControlLabel name="observer" value="observer" control={<Radio />} label="Observer" />
            </RadioGroup>
        </FormControl>
    );
}
