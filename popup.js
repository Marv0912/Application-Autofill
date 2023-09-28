document.getElementById('saveBtn').addEventListener('click', function() {
    // get all the userData when the save button is clicked 
    let userData = {
        fullName: document.getElementById('fullName').value,
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value


    };

    chrome.storage.local.set({userData: userData});
})