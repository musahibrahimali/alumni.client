
const useGoogleAuthentication = () => {
    const handleSuccess = async (response) => {
        // if ('accessToken' in response) {
        //     await axios({
        //         url: `http://localhost:5000/client/google/callback`,
        //         method: "GET",
        //         withCredentials: true,
        //         headers: {
        //             "Accept": "application/json",
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     });
        // }
        console.log(response);
    }

    return {
        handleSuccess,
    }
}

export default useGoogleAuthentication;