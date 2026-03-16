import "./TagList.scss";

const Tag = ({ tag }) => {
  //le composant Tag reçoit une prop tag qui représente le texte de l’étiquette à afficher
  return (
    <span key={tag} className="tag">
      {tag}
    </span>
  ); //Affiche le texte du tag dans un élément HTML <span>
};

const TagList = ({ tags }) => {
  // le composant TagList reçoit une prop tags qui est un tableau de chaînes de caractères représentant les différentes étiquettes à afficher pour un logement
  return (
    <div className="tag-list">
      {tags.map(
        (
          tag, //On parcourt la liste des tags avec map() et pour chaque tag, on rend un composant Tag en lui passant le texte du tag en tant que prop
        ) => (
          <Tag key={tag} tag={tag}>
            {tag}
          </Tag> //On crée un composant Tag et on lui envoie la donnée tag en tant que prop,le composant Tag va ensuite afficher le texte du tag dans un élément HTML <span>
        ),
      )}
    </div>
  );
};

export default TagList;
