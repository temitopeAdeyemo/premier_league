const team = requireTeam;

// const addTeam = async (req, res, next)=>{
//     try {
//         const { name, manager, squadSize } = req.body;
//         const teamExists = Team.findOne({ name });
//         if (!name || !manager || !squadSize) {
//           return res.status(401).json({
//             message: `Please fill all required field`,
//           });
//         }
//         if (teamExists) {
//           return res.status(401).json({
//             message: `${name} has already been added to the database`,
//           });
//         }
//         const newTeam = new Fixture({ name, manager, squadSize });
//         return res.status(201).json({
//           message: `${name.toUpperCase()} has been added to the Premier League successfully`,
//         });
//     } catch (error) {
//         return res.status(500).json({
//           message: `Server Error...
//           ${error.message}`,
//         });
//     }
// }

const registeredTeamsAndDetails = async (req, res, next) => {
  try {
    const allTeam = Team.find();
    return res.status(201).json({
      allTeam,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error...
          ${error.message}`,
    });
  }
};

const registeredTeamList = async (req, res, next) => {
  try {
    const teamListArray = [];
    const allTeams = Team.find();
    for (team of allTeams) {
      // teamListArray.push(team.name);
      teamListArray.push(`${allTeams.indexOf(team)+1}. ${team.name}`)  
    }
    const teamList = teamListArray.join(`
    
    `);
    return res.status(201).json({
      teamList,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server Error...
          ${error.message}`,
    });
  }
};

module.exports = {
  registeredTeamsAndDetails,
  registeredTeamList,
};
