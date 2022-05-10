export default function validateInfo(values) {
    let errors = {};
  
    if (!values.Nom.trim()) {
      errors.Nom = 'Nom obligatoire';
    }
    if (!values.Prénom.trim()) {
      errors.Prénom = 'Prénom obligatoire';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.Numéro_De_Téléphone.trim()) {
      errors.Numéro_De_Téléphone = 'Numéro inscription obligatoire';
    }
    if (!values.Promotion.trim()) {
      errors.Promotion = 'Promotion obligatoire';
    }
    if (!values.Groupe.trim()) {
      errors.Groupe = 'Groupe obligatoire';
    }
  
  
    
    if (!values.email) {
      errors.email = 'Adresse email obligatoire';
    } else if (!/\S+\.\S+@esi-sba.dz+/.test(values.email)) {
      errors.email = 'Adresse email non valide ';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
  