const ProjetTechno = ({ name }) => {
  const selectionTechnoByProjectName = (name) => {
    let technoUse = [];

    switch (name) {
      case "RapidReport":
        technoUse = ["React", "Firebase"];
        break;
      case "MyMovies":
        technoUse = ["React", "NodeJs", "Sequelize", "MaterialUi"];
        break;
      case "InfoMeteo":
        technoUse = ["React", "Typescript"];
        break;
      default:
        technoUse = [];
    }
    return technoUse;
  };

  return (
    <div className="flex flex-wrap gap-2 ">
      {selectionTechnoByProjectName(name).map((tec, key) => (
        <div
          className="rounded-xl bg-primary px-2 py-1 text-xs font-semibold"
          key={key}
        >
          <p>{tec}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjetTechno;
