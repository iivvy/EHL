export default function valider (values) {
  let errors ={};
  
  if  (!values.Titre.trim()) {
    errors.Titre = 'Titre obligatoire';
  }
  if  (!values.Auteur.trim()) {
    errors.Auteur = 'Auteur obligatoire';
  }
  if  (!values.Description.trim()) {
    errors.Description = 'Description obligatoire';
  }
  return errors;
   


  


}
