import React, { useState, useEffect } from 'react';

const ChipInput = ({ placeholder, chipsPreAdded, onFieldAdded }) => {
    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([]);


    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && inputValue !== "") {
            addChip(inputValue.trim());
            setInputValue('');
        }
    };

    const addChip = (value) => {
        if (value) {
            const newChips = [...chips, value];
            setChips(newChips);
            if (onFieldAdded) {
                onFieldAdded(newChips);
            }
        }
    };

    const removeChip = (index) => {
        const updatedChips = [...chips];
        updatedChips.splice(index, 1);
        setChips(updatedChips);
        if (onFieldAdded) {
            onFieldAdded(updatedChips);
        }
    };

    useEffect(() => {
        if (chipsPreAdded !== null && chips.length === 0) {
            setChips(chipsPreAdded);
        }
    }, [chips]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                className='form-control form-control-solid'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => handleKeyPress(e)}
                placeholder={placeholder ?? "email@dominio + Enter"}
            />
            <div style={{ marginTop: '10px' }}>
                {chips.map((chip, index) => (

                    <div key={index} style={{ display: 'inline-block', marginRight: '5px' }}>
                        <div style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '5px 10px', display: 'flex', alignItems: 'center' }}>
                            <span>{chip}</span>
                            <button style={{ marginLeft: '5px', border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => removeChip(index)}>
                                &times;
                            </button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default ChipInput;
