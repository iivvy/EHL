
export default function validateInfomp(values) {
    let errors = {};
    if (!values.code.trim()) {
      errors.code = 'Code obligatoire';
    }
    
    return errors;
  }
  