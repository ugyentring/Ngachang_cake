import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';  // Import Form from react-final-form
import './order.css';

import Alert from './Alert';

const DishForm = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleCancel = () => {
        setIsAlertOpen(false);
    };

    const onSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <Form onSubmit={onSubmit}> {/* Wrap your form fields in the Form component */}
            {({ handleSubmit }) => (
                <section className="app-container">
                    <header>
                        <h1>Create an order</h1>
                        <img src={`${process.env.PUBLIC_URL}/food-img.png`} alt="logo" width="80%" height="75%" />
                    </header>
                    {isAlertOpen && (
                        <Alert
                            onCancel={handleCancel}
                            isOpen={isAlertOpen}
                            message={message}
                        />
                    )}
                    <div className="form__input-container">
                        <label>
                            <Field
                                className="form__input"
                                component="input"
                                type="number"
                                id="no_of_slices"
                                name="no_of_slices"
                                min="1"
                                required
                            />
                            <span className="form__label form__label--slices">No of slices</span>
                        </label>
                        <label>
                            <Field
                                className="form__input"
                                component="input"
                                type="number"
                                id="diameter"
                                name="diameter"
                                min="15"
                                required
                            />
                            <span className="form__label form__label--diameter">Diameter</span>
                        </label>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </section>
            )}
        </Form>
    );
};

export default DishForm;
