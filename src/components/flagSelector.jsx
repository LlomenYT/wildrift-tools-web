import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useLanguage } from '../context/languageContext';



const FlagSelector = () => {
    const { language, setLanguage } = useLanguage();


    const [selectedFlag, setSelectedFlag] = useState('es'); // Set 'spanish' as the default value

    const handleFlagChange = (event) => {
        setLanguage(event.target.value);
        setSelectedFlag(event.target.value);
    };


    return (

        <Select
            value={language}
            onChange={handleFlagChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Idioma' }}
        >
            <MenuItem value="es" selected>
                🇪🇸
            </MenuItem>
            <MenuItem value="en">
                🇬🇧
            </MenuItem>
        </Select>

    );
};

export default FlagSelector;