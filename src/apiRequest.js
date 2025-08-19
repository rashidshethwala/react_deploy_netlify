const apiRequest = async (url = '', optionsObject = null, errMessage = null) => {
    try {
        const response = await fetch(url, optionsObject);
        if (!response.ok) throw Error('Did not receive expected data');
        //   const data = await response.json();
        // return data;
    } catch (err) {
        errMessage = errMessage ? errMessage : err.message;
        //   throw Error(errMessage);
        console.error('Error in apiRequest:', errMessage);
    }
    finally {
        console.log('Fetch completed');
        return errMessage;
    }
}

export default apiRequest;