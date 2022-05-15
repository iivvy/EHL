
export default function validateInfomp1(values) {
    let errors = {};
    if (!values.password1) {
        errors.password1 = 'Nouveau mot de passe obligatoire ';
      } else if (values.password1.length < 8) {
        errors.password1 = 'La longueur du mot de passe doit être minimum 8 caractéres ';
      }
    
      if (!values.password2) {
        errors.password2 = 'La confirmation du nouveau mot de passe est obligatoire ';
      } else if (values.password2 !== values.password1) {
        errors.password2 = 'Les mots de passe ne sont pas compatibles ';
      }
    return errors;
  }
  