import React, { useState } from 'react';
import './OrderForm.css';


const CakeOrderForm = () => {
    const [formData, setFormData] = useState({
        cakeFlavor: '',
        cakeSize: '',
        wording: '',
        otherDescription: '',
        attachment: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (event) => {
        setFormData((prevState) => ({ ...prevState, attachment: event.target.files[0] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Cake order form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cake Order Form</h1>
            <div className="form-group">
                <label htmlFor="cakeFlavor">Cake Flavor:</label>
                <select id="cakeFlavor" name="cakeFlavor" value={formData.cakeFlavor} onChange={handleInputChange}>
                    <option value="">Choose a flavor</option>
                    <option value="chocolate">Chocolate</option>
                    <option value="vanilla">Vanilla</option>
                    <option value="strawberry">Strawberry</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="cakeSize">Cake Size:</label>
                <select id="cakeSize" name="cakeSize" value={formData.cakeSize} onChange={handleInputChange}>
                    <option value="">Choose a size</option>
                    <option value="small">Small (6 inches)</option>
                    <option value="medium">Medium (8 inches)</option>
                    <option value="large">Large (10 inches)</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="wording">Wording on Cake:</label>
                <textarea id="wording" name="wording" value={formData.wording} onChange={handleInputChange} rows="3" />
            </div>
            <div className="form-group">
                <label htmlFor="otherDescription">Other Description:</label>
                <textarea id="otherDescription" name="otherDescription" value={formData.otherDescription} onChange={handleInputChange} rows="3" />
            </div>
            <div className="form-group">
                <label htmlFor="attachment">Attach Design or Image (Optional):</label>
                <input type="file" id="attachment" name="attachment" onChange={handleFileChange} />
            </div>
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default CakeOrderForm;
