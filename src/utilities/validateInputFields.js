export default function Validation(values) {
    const errors = {}

    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.name === '') {
        errors.name = 'Name is required';
    }

    if(values.department === '') {
        errors.department = 'Department name is required';
    }

    if(values.position === '') {
        errors.position = 'Position is required';
    }

    if(values.username === '') {
        errors.username = 'Username is required';
    }
    if(values.email === '') {
        errors.email = 'Email is required';
    }
    // else if (!emailValidation.test(values.email)) {
    //     errors.email = 'Email is not correct'
    // } 
    if(values.password === '') {
        errors.password = 'Password is required';
    } 
    // else if (!passwordValidation.test(values.password)) {
    //     errors.password = 'Password is not secure'
    // } 
    if(values.text === '') {
        errors.text = 'Post is required';
    }
    if(values.job === '') {
        errors.job = 'job is required';
    }
    if(values.id === '') {
        errors.id = 'ID is required';
    }
    return errors;
}