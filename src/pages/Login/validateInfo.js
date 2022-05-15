
export default function validateInfo(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Adresse email obligatoire';
  } else if (!/\S+\.\S+@esi-sba.dz+/.test(values.email)) {
    errors.email = 'Adresse email non valide ';
  }
  if (!values.password) {
    errors.password = 'Le mot de passe est obligatoire';
  } else if (values.password.length < 8) {
    errors.password = 'Le mot de passe doit être minimum 8 caractéres ';
  }

  
  return errors;
}
