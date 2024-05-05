

export const EmailValidation = (mail) => {

    if (!mail.trim()) {
        return "Please enter your email";

    } else if (!/^\S+@\S+\.\S+$/.test(mail)) {
        return "Please enter a valid email address.";

    }
    else if (mail.length > 50) {
        return "Email should not exceed 50 characters.";

    } else if (!mail.endsWith('.com') && !mail.endsWith('.net') && !mail.endsWith('.org') && !mail.endsWith('.edu')) {
        return "Email should have a valid domain (.com, .net, .org, .edu).";

    }
    return null;

}


export const PhoneNumberValidations = (phone) => {

    if (!phone.trim()) {
        return "Please enter your phone number.";

    }
    else if (!/^\d{10}$/.test(phone)) {
        return "Please enter a valid 10-digit phone number.";

    } else if (/[+.]/.test(phone)) {
        return "Phone number should not contain '+' or '.' characters.";
    }
    return null
}

export const NameValidations = (name,fieldName) => {

    if (!name.trim()) {
        return `Please enter your ${fieldName}.`;

    } else if (!/^[a-zA-Z]+$/.test(name)) {
        return `${fieldName} can only contain letters.`;

    } else if (name.length < 2 || name.length > 20) {
        return `${fieldName} must be between 2 and 20 characters.`;

    }
    return '';
}


export const validateTextArea =(address,fieldName)=> {
    // Presence validation
    if (!address.trim()) {
        return `${fieldName} is required.`;
    }
    
    // Length validation
    else if (address.length < 3 || address.length > 200) {
        return `${fieldName} must be between 3 and 200 characters.`;
    }
    
    // Add additional validation rules here
    
    return ''; // Return null if validation passes
}

export const FullNameValidations = (name, fieldName) => {
   
    console.log(name)
   
    if (!name.trim()) {
        return `Please enter your ${fieldName}.`;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        return `${fieldName} can only contain letters and spaces.`;
    } else if (name.length < 2 || name.length > 25) {
        return `${fieldName} must be between 2 and 25 characters.`;
    }
    return ""
}

const fileToUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

export const validateImage = async(file) => {
    const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB in bytes
    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Add more formats if needed

    if (!file) {
        return 'No image selected.';
    }

    if (file.size > MAX_IMAGE_SIZE) {
        return 'Image size exceeds 5MB limit.';
    }

    if (!allowedFormats.includes(file.type)) {
        return 'Unsupported image format. Only JPEG, PNG, GIF, and WebP are allowed.';
    }

    return ''; // No errors

    // const MAX_IMAGE_SIZE = 4 * 1024 * 1024; // 5MB in bytes
    // if (!image) {
    //     return `${name} is required.`;
    // }

    // if (image.size > MAX_IMAGE_SIZE) {
    //     return "Image size exceeds 5MB limit.";
    // }


    // const imageFile = image.target.files[0];
    // const imageUrl = await fileToUrl(imageFile);
    // return (imageUrl);

};

export const onChangeImage = async (e) => {
    const file = e.target.files[0];
    const error = validateImage(file);

    if (error) {
        // Handle error (e.g., display error message)
        console.error(error);
        return;
    }
}


export const validateAadharNumber = async(aadharNumber,setAadharNumber,setAadharNumberError) => {
    setAadharNumber(()=>aadharNumber);
    console.log(aadharNumber);
    
    if (!aadharNumber.trim()) {
         setAadharNumberError(()=>"Aadhar number is required.");
         return
    } else if (!/^\d{12}$/.test(aadharNumber)) {
        setAadharNumberError(()=> "Aadhar number must be a 12-digit number.");
        return
    }
    setAadharNumberError(()=>"");
 
    return null; // No errors
};

export const FileValidations = (file) => {

}




const MIN_AGE = 5;
const MAX_AGE = 100;

export const validateAge = (age) => {
    if (!age.trim()) {
        return "Age is required.";
    }

    const parsedAge = parseInt(age);
    if (isNaN(parsedAge)) {
        return "Age must be a number.";
    }

    if (parsedAge < MIN_AGE || parsedAge > MAX_AGE) {
        return `Age must be between ${MIN_AGE} and ${MAX_AGE}.`;
    }

    return null; // No errors
};


export const RequiredValidation = (e) => {
    if (!e.trim()) {
        return "This filed is required.";
    }
    return null
}


