import React, { useState } from 'react';

function CheckboxGroup() {
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    // Function to handle checkbox selection
    const handleCheckboxChange = (number) => {
        const index = selectedNumbers.indexOf(number);
        if (index === -1) {
            // If number not found, add it to the array
            setSelectedNumbers([...selectedNumbers, number]);
        } else {
            // If number found, remove it from the array
            setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
        }
    };

    return (
        <div>
            {/* Render checkboxes for numbers 1 to 12 */}
            <div  className='d-flex flex-wrap input-styling rounded-2'>
            {[...Array(12).keys()].map((number) => {
                const num = number + 1; // Adjust to start from 1
                return (
                    <label key={num} className='m-2'>
                        <input
                            type="checkbox"
                            className='form-check-input m-1'
                            checked={selectedNumbers.includes(num)}
                            onChange={() => handleCheckboxChange(num)}
                        />
                        {num}
                    </label>
                );
            })}
            </div>

        

            {/* Display selected numbers */}
            <div>
                Selected Sharing Numbers: {selectedNumbers.join(', ')}
            </div>
        </div>
    );
}

export default CheckboxGroup;
