
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BasicButtons=({size, backgroundColor,color}) => { 
    return (
        <Stack spacing={2} direction="row">
        <Button variant="text" 
            style={{size:size,backgroundColor,color}}
        >Buttont Test</Button>
        <Button variant="contained"
        style={{fontSize : size,
            backgroundColor : backgroundColor,
            color: color,
        }}
        >Contained</Button>
        <Button variant="outlined">Outlined</Button>
        </Stack>
    );
}

export default BasicButtons;