chrome.storage.local.get('userData', function(data) {
    let userData = data.userData;
    if (userData) {

        let fieldMapping = {
            'fullName':'fullName',
            'firstName':'firstName',
            'lastName':'lastName',
            'email':'email',
            'phoneNumber':'phoneNumber',
            'address':'address',
            'city':'city',
            'state':'state',
            'zipCode':'zipCode',
        }

        for (let field in fieldMapping) {
            let inputElement = document.querySelector('input[name"${field}');
            if (inputElement && userData[fieldMapping[field]]) {
                inputElement.value = userData[fieldMapping[fielc]];
            }
        }
    }
})