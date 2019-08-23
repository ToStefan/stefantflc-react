import React from 'react';
import HubspotForm from 'react-hubspot-form'

import './hubspot_form.css'

const HubSpotForm = () => {
    return (
        <div className="box small-box container">
            <div className="hubspot">
                <HubspotForm
                    portalId='6260184'
                    formId='8333ac28-6116-4d6b-8fc9-c289edcd4583'
                    loading={<div>Loading...</div>}
                />
            </div>
        </div >
    );
};

export default HubSpotForm;