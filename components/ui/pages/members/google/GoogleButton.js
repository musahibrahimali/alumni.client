import React from 'react';
import GoogleLogin from 'react-google-login';
import useGoogleAuthentication from "./useGoogleAuthentication";

const GoogleButton = () => {
    const clientId = "651347700714-mnohbpu1ap5lhuiu8sh0c3pd4fecncfp.apps.googleusercontent.com";
    const { handleSuccess } = useGoogleAuthentication();

    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Log in"
            onSuccess={handleSuccess}
        />
    );
}

export default GoogleButton;